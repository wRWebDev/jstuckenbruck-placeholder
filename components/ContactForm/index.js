import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './contactForm.module.scss'

/* Regex for testing email addresses */
const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ContactForm = () => {

    const [ name, setNameTo ] = useState('')
    const [ email, setEmailTo ] = useState('')
    const [ message, setMessageTo ] = useState('')
    const [ userFeedback, setUserFeedbackTo ] = useState('')
    const [ sent, setSentTo ] = useState(false)
    const [ sending, setSendingTo ] = useState(false)

    /* Function to validate the user inputs */
    const validateForm = (details) => {
        const { name, email, message } = details
        /* Disallow if empty */
        if(!name || !email || !message){
            setUserFeedbackTo('All fields must be filled out.')
            return false
        }
        /* Disallow if name < 2, or name > 50 */
        if(name.length < 2 || name.length > 50){
            setUserFeedbackTo('Names must be between 2 and 50 characters.')
            return false
        }
        /* Disallow if email doesn't match above regex */
        if(!email.match(emailFormat) || email.length > 254){
            setUserFeedbackTo(`That isn't a valid email address.`)
            return false
        }
        /* Disallow if message shorter than 30 chars */
        if(message.length < 30){
            setUserFeedbackTo('A message must be longer than that...')
            return false
        }
        return true
    }

    /* Handle contact form submissions */
    const handleSubmit = async e => {
        console.log('submitting')
        /* Stop reload, change sending state, sort vars into obj */
        e.preventDefault()
        setSendingTo(true)
        const details = {name, email, message}
        /* Send details to api endpoint if form details are valid */
        if(validateForm(details)){
            setUserFeedbackTo('Sending your message to Johann...')
            await axios.post('/api/contact-form-mailer/admin', details)
            setUserFeedbackTo('Sending you a confirmation message...')
            await axios.post('/api/contact-form-mailer/client', details)
            setUserFeedbackTo('Thank you for your message.\nYou should hear back from Johann soon.')
            setSentTo(true)
            /* Hide user message after 5s */
            setTimeout(()=>{setUserFeedbackTo('')}, 5000)
        }
        setSendingTo(false)
    }    

    /* Reset the form after message is sent */
    useEffect(()=>{
        if(sent){
            setNameTo('')
            setEmailTo('')
            setMessageTo('')
        }
    }, [sent])

    return (
        <>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={e=>setNameTo(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="email@address.com"
                        value={email}
                        onChange={e=>setEmailTo(e.target.value)}
                    />
                </label>
                <label className={styles.doubleWidth}>
                    <textarea
                        rows={4}
                        placeholder="message"
                        value={message}
                        onChange={e=>setMessageTo(e.target.value)}
                    />
                </label>

                <p className={styles.doubleWidth} style={userFeedback === '' ? {display: 'none'} : {}}>{userFeedback}</p>
                
                <button
                    type="submit"
                    disabled={(sending || !name || !email || !message) ? true : false}
                    style={(sending || !name || !email || !message) ? {cursor: 'not-allowed'} : {cursor: 'pointer'}}
                    className={`${styles.doubleWidth} btn btn-primary`}
                >
                    Send
                </button>
            </form>
        </>
    )
}

export default ContactForm