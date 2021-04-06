import ContactForm from '../ContactForm'
import { socialMediaLinks } from '../../lib/socialMediaLinks'
import { nanoid } from 'nanoid'
import * as Scroll from 'react-scroll'
let ScrollElement = Scroll.Link
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <ScrollElement 
                name="contact"
            >
            </ScrollElement>
            <footer className="flex flex-row flex-wrap">
                <div id="contactFormWrapper">
                    <h3>Contact</h3>
                    <ContactForm />
                </div>
                <div className="info">
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
                <div className="flex flex-row flex-center" style={{height: 200, width: '100%', marginTop: 30}}>
                    <Image 
                        src={`${process.env.NEXT_PUBLIC_BUCKET}forbes.png`}
                        width={256}
                        height={200}
                        layout="fixed"

                    />
                </div>
            </footer>
        </>
    )
}

export default Footer