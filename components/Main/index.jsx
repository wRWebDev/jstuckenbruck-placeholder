import TitleCard from './TitleCard'
import Biography from './Biography'
import Events from './Events'

const Main = ({ biography }) => {
    return (
        <>
            <TitleCard />
            <Biography biography={biography} />
            <Events />
        </>
    )
}

export default Main