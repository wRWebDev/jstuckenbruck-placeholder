import Image from 'next/image'
import ScrollAnimation from '../ScrollAnimation'
import AOS from 'aos'

import * as Scroll from 'react-scroll'
let ScrollLink = Scroll.Link

const TitleCard = () => {

    // useEffect(()=>{
    //     AOS.init({
    //       duration: 600
    //     })
    //   },[])

    return (
        <header className="flex flex-row flex-wrap flex-center full-width bg-dark text-white">
            <div className="circle image">    
                <Image 
                    src={`${process.env.NEXT_PUBLIC_BUCKET}closeup.jpg`}
                    width={300}
                    height={300}
                    layout="responsive"
                    priority={true}
                />
            </div>
            <div 
                className="text flex flex-column flex-start"
            >
                <h1 className="full-width">Johann Stuckenbruck</h1>
                <h2 className="full-width">Conductor</h2>

                <p className="weight-regular full-width">New website arriving June 2021</p>

                <div className="btn-group flex flex-row flex-wrap flex-start">
                    {/* <button 
                        className="btn btn-primary"
                        tabIndex={1}
                    >
                        Sign up for a reminder
                    </button> */}
                    <ScrollLink to="contact" spy={true} smooth={true} offset={-50} duration={1000} delay={100}>
                        <button 
                            className="btn btn-primary"
                            tabIndex={2}
                        >
                            Contact Johann
                        </button>
                    </ScrollLink>
                </div>
            </div>
            <ScrollAnimation />
        </header>
    )
}

export default TitleCard