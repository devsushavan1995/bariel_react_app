import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import '../css/Breadcrumb.css';

function Pagetitle(props) {
  const [bgImage, setBgImage] = useState('');
  const crumbs = props.crumbs;
  //   const selected = props.selected;

  console.log(props.bgImage);

  return (
    <div className='page-title-section'>
      {/* <div className='page-title__bg-image bg--center bg--cover bg--no-repeat' style={{backgroundImage: `url('/images/${bgImage}')`}}></div>
      <div className="page-title__overlay"></div> */}
      <h3 className='page-title'>{props.title}</h3>
      <Breadcrumb crumbs={crumbs} />
    </div>
  );
}

export default Pagetitle;
