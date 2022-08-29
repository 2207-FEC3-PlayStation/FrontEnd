import React, {useEffect, useState} from 'react';


function StarRating({reviews}) {

  const [stars, setStars] = useState(null);

  useEffect(() => {
  })


  return (
    <div className={'rating'}style={{display: 'inline-block', verticalAlign: 'center'}}>
      <i className={'rating__star far f-star'}></i>>
      <i className={'rating__star far f-star'}></i>>
      <i className={'rating__star far f-star'}></i>>
      <i className={'rating__star far f-star'}></i>>
    </div>
  )
}

export default StarRating;

function executeRatings(stars) {

  const ratingStars = [...document.getElementByClassName('rating_start')];
  const starClassActive = 'rating__star fas fa-star';
  const starClassInactive = 'rating__star far fa-star';
  const starsLength = stars.length;
  let i;
}