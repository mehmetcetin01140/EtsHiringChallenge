import Events from '../events/events.json'
import {Link} from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="mx-3"
    >
      {Events.map(event=>(
        <SwiperSlide className='slider'>
        <Link to={`/etkinlik/${event.name.replaceAll(" ","").toLowerCase()}`}>
          <img src={event.image} alt="" className="sliderImage"/>
        </Link>
        </SwiperSlide>
      
      ))}
    
    </Swiper>
  );
};