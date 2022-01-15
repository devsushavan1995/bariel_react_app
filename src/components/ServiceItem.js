import React from 'react';
import { Link } from 'react-router-dom';
function ServiceItem(props) {
  return (
    <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
      <div className='service mb-5'>
        <div className='service__thumbnail mb-4'>
          <img src={props.content.thumbnailIcon} alt='' />
        </div>
        <h5 className='service__title mb-3 text--heading-dark'>{props.content.title}</h5>
        <p className='service__description mb-3 text--para text--sm'>{props.content.desc}</p>
        <Link to='/' className='service__cta--link d-flex align-items-center'>
          <span className='link__text'>Read More</span>
          <i className='fas fa-long-arrow-alt-right'></i>
        </Link>
      </div>
    </div>
  );
}

export default ServiceItem;
