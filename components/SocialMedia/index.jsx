import { socialMediaLinks } from '../../lib/socialMediaLinks'
import { useEffect } from 'react'

const SocialMedia = () => {

    /* On pageload, paint SVGs */
    useEffect(()=>{
        socialMediaLinks.forEach((sm)=>{
            document.getElementById(`sm-${sm.name}`).innerHTML = sm.icon
        })
    }, [])

    return (
        <div id="menu-socialMedia">
            <ul>
                {
                    socialMediaLinks.map((sm, i) => (
                        <a 
                            key={i} 
                            href={sm.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-media-links"
                        >
                            <li 
                                id={`sm-${sm.name}`} 
                            />
                        </a>
                    ))
                }
            </ul>
        </div>
    )    
}

export default SocialMedia