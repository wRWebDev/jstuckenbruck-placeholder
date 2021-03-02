import SwiperCore, { Keyboard, Navigation, Mousewheel } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import { nanoid } from 'nanoid'

const EventSlider = ({ events }) => {

    SwiperCore.use([Keyboard, Navigation, Mousewheel])

    console.log(events)

    return (
        <div style={{position: 'relative'}}>
            <Swiper
                slidesPerView="auto"
                spaceBetween={50}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                navigation={{
                    nextEl: '#eventSwiperNext',
                    prevEl: '#eventSwiperBack',
                }}
                freeMode={true}
                mousewheel={{
                    forceToAxis: true
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
            <div id="eventSwiperNext" />
            <div id="eventSwiperBack" />
        </div>
    )
}

export default EventSlider
