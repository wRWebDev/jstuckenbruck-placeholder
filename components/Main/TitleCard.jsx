import Image from 'next/image'

const TitleCard = () => {
    return (
        <header className="flex flex-row flex-wrap flex-center full-width bg-dark text-white">
            <div className="circle image" data-aos="fade-up">    
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
                data-aos="fade-up"
            >
                <h1 className="full-width">Johann Stuckenbruck</h1>
                <h2 className="full-width">Conductor</h2>

                <p className="weight-regular full-width">New website arriving June 2021</p>

                <div className="btn-group flex flex-row flex-wrap flex-start">
                    <button 
                        className="btn btn-primary"
                        tabIndex={1}
                    >
                        Sign up for a reminder
                    </button>
                    <button 
                        className="btn btn-secondary"
                        tabIndex={2}
                    >
                        Contact Johann
                    </button>
                </div>

            </div>
        </header>
    )
}

export default TitleCard