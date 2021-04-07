import ContactForm from '../ContactForm'
import JSInfo from './JSInfo'
import ForbesInfo from './ForbesInfo'
import * as Scroll from 'react-scroll'
let ScrollElement = Scroll.Link

const Footer = () => {
    return (
        <>
            <ScrollElement 
                name="contact"
            >
            </ScrollElement>
            <footer className="flex flex-row flex-wrap">
                
                <div style={{width:'100%'}}>
                    <h3>Contact</h3>
                </div>
        
                <ForbesInfo />

                <div id="contactFormWrapper">
                    <ContactForm />
                </div>

                <JSInfo />

            </footer>
        </>
    )
}

export default Footer