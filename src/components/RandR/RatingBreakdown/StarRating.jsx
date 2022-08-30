import React, {useEffect, useState} from 'react';


function StarRating({avgRating}) {

  const [stars, setStars] = useState(null);
  useEffect(() => {
  })

  return (
    <div className={'rating'}style={{display: 'inline-block', verticalAlign: 'center'}}>
      <div className={'stars-outer'}>
        <div className={'stars-inner'} style={{width: avgRating*20 + '%'}}></div>
      </div>
    </div>
  )
}

export default StarRating;

// const ratingStars = [...document.getElementsByClassName('rating__star')];
// function executeRatings(stars) {

//   const starClassActive = 'rating__star fas fa-star';
//   const starClassInactive = 'rating__star far fa-star';
//   const starsLength = stars.length;
//   let i;
// }