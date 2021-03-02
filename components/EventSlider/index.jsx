import SwiperCore, { Keyboard, Navigation } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import { nanoid } from 'nanoid'

const EventSlider = ({ events }) => {

    SwiperCore.use([Keyboard, Navigation])

    console.log(events)

    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={50}
            keyboard={{
                enabled: true,
                onlyInViewport: true,
            }}
        >
            {
                events.map(event => {
                    return (
                        <SwiperSlide key={nanoid()}>
                            <p>{event.date}</p>
                            <h2>
                                <a 
                                    href={event.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    {event.institution}
                                </a>
                            </h2>
                                <span />
                            <p>
                                <strong style={{display: 'block'}} className="full-width">{event.repertoire[0].composer}</strong>
                                {event.repertoire[0].work}
                            </p>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default EventSlider
