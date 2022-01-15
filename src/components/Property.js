import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Property.css';
function Property(props) {
  return (
    <div className='col-12 col-sm-6 col-md-6 col-lg-4'>
      <div className='property'>
        <Link to={`/properties/${props.data._id}`} className='d-block'>
          <div className='property__image-container'>
            <img src={props.data.image} alt='' className='w-100'/>
            <div className='property__top-data d-flex justify-content-between align-items-center'>
              <h4 className='property__price text--light'>
                <span class='price__prefix'>$</span>
                {props.data.isRent ? props.data.monthlyRent : props.data.buyingPrice}
                <span class='price__suffix'>{props.data.isRent ? '/m' : ''}</span>
              </h4>
              <p className='property__location text--sm m-0 text--light'>
                <span className='location__icon'>
                  <i className='fas fa-map-marker-alt'></i>
                </span>
                <span className='location__text'>{props.data.location}</span>
              </p>
            </div>
            <span className='property__tag'>{props.data.isRent ? 'RENT' : 'BUY'}</span>
          </div>
        </Link>
        <h5 className='property__title px-4 py-3'>
          <Link to={`/properties/${props.data._id}`}>{props.data.title}</Link>
        </h5>
        <div className='property__spec px-4 pb-3'>
          <ul className='spec-list d-flex justify-content-between'>
            <li className='spec-list__item'>
              <span className='spec__icon text--secondary'>
                <i className='fas fa-bed'></i>
              </span>
              <span className='spec__count text--para'>{props.data.noOfBeds}</span>
              <span className='spec__title text--para'>Beds</span>
            </li>
            <li className='spec-list__item'>
              <span className='spec__icon text--secondary'>
                <i className='fas fa-bath'></i>
              </span>
              <span className='spec__count text--para'>{props.data.noOfBathrooms}</span>
              <span className='spec__title text--para'>Baths</span>
            </li>
            <li className='spec-list__item'>
              <span className='spec__icon text--secondary'>
                <i className='fas fa-home'></i>
              </span>
              <span className='spec__count text--para'>{props.data.propertyArea}</span>
              <span className='spec__title text--para'>sqft</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Property;
