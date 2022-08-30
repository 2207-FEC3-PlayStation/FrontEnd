import React, {useEffect, useState} from 'react';


function StarRating({avgRating, rating}) {
  //if a rating props is passed in, this component will take that value. Otherwise it will default to the average rating for the overall product
  let starRating = rating || avgRating;

  return (
    <div className={'stars-outer'}>
      <div className={'stars-inner'} style={{width: starRating*20 + '%'}}></div>
    </div>
  )
}

export default StarRating;