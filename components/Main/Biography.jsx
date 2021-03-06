import reactStringReplace from 'react-string-replace'
import { nanoid } from 'nanoid'
import SocialMedia from '../SocialMedia'
import { useEffect } from 'react'

const bolden = string =>
    reactStringReplace(string, /\*+(.*?)\*+/mg, (match, i) => (
        <strong key={nanoid()}>{match}</strong>
    ))
const emphasise = string =>
    reactStringReplace(string, /\_+(.*?)\_+/mg, (match, i) => (
        <em key={nanoid()}>{match}</em>
    ))

const Biography = ({ biography }) => {

    const { quotes, body } = biography
    const paragraphs = body.split('\n\n')
    const quote = p => <>
        <div className="quote" key={nanoid()}>
            {quotes[0].quote}
            <h5>{`- ${quotes[0].source}`}</h5>
        </div>
        <p key={nanoid()}>
            {bolden(emphasise(p))}
        </p>
    </>

    return (
        <main>
            <h3 
                tabIndex={3}   
            >
                Biography
            </h3>
            <article>
                {
                    paragraphs.map((p, i) => {
                        let para = <p key={nanoid()}>{bolden(emphasise(p))}</p>

                        return i !== Math.ceil(2 * paragraphs.length / 3)
                            ? para
                            : quote(p)
                    })
                }
                <SocialMedia />
            </article>
        </main>
    )
}

export default Biography