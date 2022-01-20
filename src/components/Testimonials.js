import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import TestimonialsItem from './TestimonialsItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
  const testimonialsData = [
    {
      rating: 4.7,
      quoteHeading: 'Outstanding',
      quoteText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      clientImage: 'client-1.png',
      clientName: 'Jane Doe',
      clientDesignation: 'CEO, ABC Corp.',
    },
    {
      rating: 4.2,
      quoteHeading: 'Great Support',
      quoteText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      clientImage: 'client-2.png',
      clientName: 'Jane Doe',
      clientDesignation: 'CEO, ABC Corp.',
    },
    {
      rating: 3,
      quoteHeading: 'Helpful',
      quoteText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      clientImage: 'client-3.png',
      clientName: 'Jane Doe',
      clientDesignation: 'CEO, ABC Corp.',
    },
  ];
  return (
    <div className='testimonial-wrapper'>
      <Swiper
        // install Swiper modules
        effect={'creative'}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        navigation={false}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          }
        }}
      >
        <div className='swiper-wrapper'>
          {testimonialsData.map(testimonial => (
            <TestimonialsItem data={testimonial} />
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Testimonials;
