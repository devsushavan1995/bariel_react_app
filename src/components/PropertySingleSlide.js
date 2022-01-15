import React from 'react';
import { SwiperSlide } from 'swiper/react';
function PropertySingleSlide(props) {
  return (
      <SwiperSlide>
        <img src={`/images/${props.slide}`} alt='' className='w-100' />
      </SwiperSlide>
  );
}

export default PropertySingleSlide;
