import firebase from '../../db/firebase'
import { separatePerformances } from '../../lib/separation'
import { useState, useEffect } from 'react'
import EventSlider from '../EventSlider'

const numberOfPerformances = 6

const Events = () => {

    const [ list, setListTo ] = useState([])

    const now = new Date()

    const getNextEvents = async () => {
        const performanceList = await firebase
            .firestore()
            .collection('schedule')
            .orderBy('endDate', 'asc')
            .where('endDate', '>=', now)
            .limit(6)
            .get()
            .then(snap => {
                const events = []
                snap.forEach(doc => {
                    events.push(doc.data())
                })
                return separatePerformances(events, true)
                        .filter(event => event.type === 'event')
                        .slice(0, numberOfPerformances)
                        .map(event => {
                            return {
                                date: new Date(event.performanceDate * 1000).toLocaleDateString('en-GB', {dateStyle: 'short'}),
                                institution: event.institution,
                                repertoire: event.repertoire,
                                link: event.link || '#'
                            }
                        })
            })
        setListTo(performanceList)
        return null
    }

    useEffect(()=>{
        if (list.length === 0){
            getNextEvents()
        }
    }, [])

    return (
        <section>
            <h3 tabIndex={4} data-aos="fade-right">Schedule</h3>
            {
                list.length < 1
                    ? <div style={{height: 600}} className="flex flex-center">Loading...</div>
                    : <EventSlider events={list} />
            }   
        </section>
    )
}

export default Events