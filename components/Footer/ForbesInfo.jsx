import Image from 'next/image'

const ForbesInfo = () => {
    return (
        <>
            <div className="flex flex-row forbesLogo" style={{height: 200, marginTop: 30}}>
                <Image 
                    src={`${process.env.NEXT_PUBLIC_BUCKET}forbes.png`}
                    width={256}
                    height={200}
                    layout="fixed"
                />
            </div>
            <div className="info forbesInfo">
                <div style={{marginTop: 30}}>
                    <h2 className="text-black">Forbes</h2>
                    <h4 className="text-black">International Artists Management</h4>
                </div>
                <ul>
                    <li>
                        <a
                            href="https://forbes-artists.com"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            forbes-artists.com
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@forbes-artists.com?Subject=Enquiring%20about%20Johann%20Stuckenbruck%20-%20Conductor">
                            info@forbes-artists.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+15149687258">
                            +1 514-968-7258
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ForbesInfo 