import Events from '../events/events.json'
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {

 
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={1}
      className="mx-3"
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        
      }}

    >
      {Events.map(event=>(
        <SwiperSlide className='slider'>
        <Link to={`/etkinlik/${event.name.toLowerCase().replaceAll(" ","").replaceAll("ş","s").replaceAll("ç","c").replaceAll("ü","u").replaceAll("ö","o").replaceAll("ğ","g").replaceAll("ı","i")}`}>
          <img src={event.image} alt="" className="sliderImage d-flex justify-content-center"/>
        </Link>
        <h5 className="text-center mt-4">{event.name}</h5>
        </SwiperSlide>
      
      ))}
    
    </Swiper>
  );
};