import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import '../css/HeroSlideSingle.css';

function HeroSlideSingle(props) {
  const property = props.content;
  return (
    <SwiperSlide>
      <div className='slide-container position-relative'>
        <div className='slide__bg bg--center bg--cover bg--no-repeat' style={{ backgroundImage: `url(/images/properties/${property.coverBg})` }}></div>
        <div className='slide__content-wrapper d-flex justify-content-start'>
          <div className='slide-content p-4 p-md-5 bg--light-white'>
            <p className='slide-content__location text--secondary'>
              <span className='slide-content__location-icon'>
                <i className='fas fa-map-marker-alt'></i>
              </span>
              <span className='slide-content__location-text'>{property.location}</span>
            </p>
            <h3 className='slide-content__title text--heading mb-3'>{property.title}</h3>
            <ul className='slide-content__spec d-flex justify-content-between mb-4'>
              <li className='slide-content__spec-item d-flex align-items-center'>
                <div className='spec-item__icon'>
                  <img src='/images/double-bed.png' alt='' width="48"/>
                </div>
                <div className='spec-item__text'>
                  <p className='spec-item__text-value'>{property.noOfBeds}</p>
                  <p className='spec-item__text-heading text--sm text--para m-0'>Beds</p>
                </div>
              </li>
              <li className='slide-content__spec-item d-flex align-items-center'>
                <div className='spec-item__icon'>
                  <img src='/images/hotel.png' alt='' width="48"/>
                </div>
                <div className='spec-item__text'>
                  <p className='spec-item__text-value'>{property.noOfRooms}</p>
                  <p className='spec-item__text-heading text--sm text--para m-0'>Rooms</p>
                </div>
              </li>
              <li className='slide-content__spec-item d-flex align-items-center'>
                <div className='spec-item__icon'>
                  <img src='/images/garage.png' alt='' width="48"/>
                </div>
                <div className='spec-item__text'>
                  <p className='spec-item__text-value'>{property.noOfGarages}</p>
                  <p className='spec-item__text-heading text--sm text--para m-0'>Garage</p>
                </div>
              </li>
            </ul>
            <Link to={`/properties/${property._id}`}  className="btn__secondary">Check Property</Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default HeroSlideSingle;
