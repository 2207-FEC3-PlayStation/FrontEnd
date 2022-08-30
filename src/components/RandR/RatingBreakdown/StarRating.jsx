import React, {useEffect, useState} from 'react';


function StarRating({avgRating, rating}) {

  let starRating = rating || avgRating;

  return (
    <div className={'stars-outer'}>
      <div className={'stars-inner'} style={{width: starRating*20 + '%'}}></div>
    </div>
  )
}

export default StarRating;