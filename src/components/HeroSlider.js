import React from 'react';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import HeroSlideSingle from './HeroSlideSingle';
import * as propertyData from '../data/propertyData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/HeroSlider.css';
function HeroSlider() {
  let counter = [];
  let slideCount = 3;
  return (
    <div className='hero-slider'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true,
          "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + '0' + (index + 1) + '</span>';
          } }}
      >
        <div className="swiper-wrapper">
        { propertyData.propertiesInfo.map((property,index)=> {
        if(counter.length < slideCount) {
          if(property.isFeatured) {
            counter.push(index);
            return  <HeroSlideSingle content={property}/>;
          }
        }
      })}
        </div>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
