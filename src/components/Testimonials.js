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
      clientImage: 'client-women.jpg',
      clientName: 'Jane Doe',
      clientDesignation: 'CEO, ABC Corp.',
    },
    {
      rating: 4.2,
      quoteHeading: 'Great Support',
      quoteText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      clientImage: 'client-women.jpg',
      clientName: 'Jane Doe',
      clientDesignation: 'CEO, ABC Corp.',
    },
    {
      rating: 3,
      quoteHeading: 'Helpful',
      quoteText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      clientImage: 'client-women.jpg',
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
        spaceBetween={30}
        slidesPerView={2}
        navigation={false}
        pagination={{ clickable: true }}
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
