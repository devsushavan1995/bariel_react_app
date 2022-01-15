import React from 'react';
import '../css/StarReview.css'

function StarReview(props) {
  const rating = props.data;
  const ratingPercentage = rating *20;
  console.log(ratingPercentage);
  return (
    <div className='star-container'>
      <div class='stars-outer'>
        <div class='stars-inner' style={{ width: `${ratingPercentage}%`}}></div>
      </div>
      <span class='number-rating'></span>
    </div>
  );
}

export default StarReview;
