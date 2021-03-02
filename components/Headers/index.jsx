import Head from 'next/head'

const Headers = () => {
    return (
        <>
            <Head>

            <title>{`Johann Stuckenbruck`}</title>
                <base href="/" />
                <meta charSet="utf-8" />
                <meta name="viewport"               content="initial-scale=1.0, width=device-width" />
                <meta property="og:type"            content="website" />
                <meta property="og:title"           content="Johann Stuckenbruck // Conductor" />
                <meta property="og:description"     content="Website of international conductor, Johann Stuckenbruck." />
                <meta property="og:image"           content="https://jstuckenbruck2021.s3.eu-west-2.amazonaws.com/media/images/sharing.jpg" />
                <meta property="og:image:width"     content="1432" />
                <meta property="og:image:height"    content="895" />
                <meta property="og:url"             content="https://jstuckenbruck.com" />
                <meta property="twitter:card"       content="summary_large_image" />
                <meta name="keywords"               content="Johann, Stuckenbruck, conductor, orchestra, classical, music, Glyndebourne" />

            </Head>
        </>
    )
}

export default Headers