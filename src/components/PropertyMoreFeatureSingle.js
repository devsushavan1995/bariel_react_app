import React from 'react';
import '../css/Pages.css';

function PropertyMoreFeatureSingle(props) {
  return (
    <div className='col-6 col-md-4 col-lg-4 mb-3'>
      <div className='more-featured-container'>
        <span className='more-feature__icon text--secondary text--sm'>
          <i class='fas fa-check'></i>
        </span>
        <span className='more-feature__text text--heading text--sm'>{props.feature}</span>
      </div>
    </div>
  );
}

export default PropertyMoreFeatureSingle;
