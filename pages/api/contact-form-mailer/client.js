/*

    Send an email to the user to notify them 
    of a successful contact form submission

        - request body = {
            name: String, 
            email: String,
            message: String --> FIXME: not needed...
        }

        - email should include details of next 2 performances

*/

// import firebase for calling event information
import firebase from '../../../db/firebase'
// import sendgrid sdk for sending email
const sgMail = require('@sendgrid/mail')
// import function to seperate performances from an event document
import { separatePerformances } from '../../../lib/separation'
// import request body validation function
import { validate } from '../../../lib/validation'


export default async function(req, res){

    // set sendgrid api key
    sgMail.setApiKey(process.env.SENDGRID_SECRET_KEY)

    // deconstruct request body
    const { name, email } = req.body

    // fetch next 2 distinct events from db
    const now = new Date()
    const events = await firebase
        .firestore()
        .collection('schedule')
        .orderBy('endDate', 'asc')
        .where('endDate', '>=', now)
        .limit(2)
        .get()
        .then(snapshot => {
            // make an array of objects
            // each obj is one of the fetched events
            const events = []
            snapshot.forEach(doc => {
                events.push(doc.data())
            })
            // split performances in an event with multiple performances
            return separatePerformances(events, true)
                .filter(event => event.type === 'event')
                .slice(0,2)
                .map(event => {
                    // format the programme
                    let programme = ''
                    event.repertoire.forEach(rep => {
                        programme += `${rep.composer}: ${rep.work}\n`
                    })
                    // return an obeject with the necessary data for the performance
                    return {
                        date: new Date(event.performanceDate * 1000).toLocaleDateString('en-GB'),
                        location: event.location,
                        institution: event.institution,
                        programme,
                        soloist: event.soloist
                    }
                })
        })

    // format data to send to sendgrid api
    const emailData = {
        from: {
            name: 'Johann Stuckenbruck',
            email: 'no-reply@wrweb.dev'
        },
        personalizations: [{
            to: [{
                email: email,
                name: name
            }],
            dynamic_template_data: {
                senderName: name,
                event1: events[0],
                event2: events[1]
            }
        }],
        template_id: process.env.SENDGRID_EMAIL_MESSAGER
    }

    // if request body valid, request that sendgrid emails the user the above info
    try {
        if(!validate(2, name, email)){
            throw new Error('Passed parameters are not valid')
        }
        await sgMail.send(emailData)
        res.status(200).send('Message successfully sent.')

    }catch (err){
        console.error(err.message)
        res.status(400).send(`${err.message}`)
    }

}