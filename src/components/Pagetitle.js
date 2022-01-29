import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import '../css/Breadcrumb.css';

function Pagetitle(props) {
  const crumbs = props.crumbs;
  //   const selected = props.selected;

  let bgImageUrl = 'd-none';
  let showOverlay = '';
  if (props.bgImage == 'none' || props.bgImage == undefined) {
    bgImageUrl = 'none';
    showOverlay = "d-none";
  } else {
    bgImageUrl = `url(/images/${props.bgImage})`;
    showOverlay = "d-block";
  }

  return (
    <div className='page-title-section'>
      <div className='page-title__bg-image bg--center bg--cover bg--no-repeat' style={{ backgroundImage: `${bgImageUrl}` }}></div>
      <div className={`page-title__bg-overlay ${showOverlay}`}></div>
      <h3 className='page-title text--center px-2'>{props.title}</h3>
      <Breadcrumb crumbs={crumbs} />
    </div>
  );
}

export default Pagetitle;
