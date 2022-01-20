import React from 'react';
import { SwiperSlide } from 'swiper/react';
import StarReview from './StarReview';

function TestimonialsItem(props) {
  const testimonial = props.data;
  return (
    <SwiperSlide>
      <div className='testimonial__item'>
        <div className='testimonia__container bg--light p-4'>
          <div className='testimonial__header d-flex align-items-center justify-content-between mb-4'>
            <StarReview data={testimonial.rating} />
            <h5 className='text--heading m-0'>{`"${testimonial.quoteHeading}"`}</h5>
          </div>
          <div className='testimonial__body mb-4'>
            <p className='text--sm text--para'>{testimonial.quoteText}</p>
          </div>
          <div className='testimonial__footer'>
            <div className='testimonial__client-details-wrapper d-flex align-items-center'>
              <img src={`/images/testimonials/${testimonial.clientImage}`} alt='' className='client-details__image rounded-circle' width='50' />
              <div className='client-details__content' style={{ marginLeft: `${0.75}rem` }}>
                <h6 className='text--heading mb-1'>{testimonial.clientName}</h6>
                <p className='text--sm text--secondary m-0'>{testimonial.clientDesignation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default TestimonialsItem;
