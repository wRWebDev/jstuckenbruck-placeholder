import ContactForm from '../ContactForm'
import { socialMediaLinks } from '../../lib/socialMediaLinks'
import { nanoid } from 'nanoid'
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
                    <ContactForm />
                <div className="info" data-aos="fade-left">
                    <div>
                        <h2 className="text-black">Johann Stuckenbruck</h2>
                        <h4 className="text-black">Conductor</h4>
                    </div>
                    <ul>
                        {
                            socialMediaLinks.map(link => {
                                return (
                                    <li key={nanoid()}>
                                        <a 
                                            href={link.link}
                                            rel="noopener noreferrer"
                                            target="blank"
                                            >
                                            {link.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h5>
                        Site&nbsp;Design&nbsp;//&nbsp;
                            <a 
                                href="https://wrweb.dev/"
                                target="_blank"    
                                rel="noopener noreferrer"
                                >
                                Will&nbsp;Robertson
                            </a>
                        &nbsp;2021   
                    </h5>
                </div>
            </footer>
        </>
    )
}

export default Footer