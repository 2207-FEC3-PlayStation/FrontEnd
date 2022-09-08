import React, {useEffect, useState} from 'react';
import server from '../../../serverRequests.js';
import styled from 'styled-components';

const Star = styled.div`
  z-index: 0;
`

function StarRating({avgRating, rating}) {
  //if a rating props is passed in, this component will take that value. Otherwise it will default to the average rating for the overall product
  const [avg, setAvg] = useState();

  useEffect(() => {
    if (avgRating) {
      setAvg(avgRating)
    } else if (rating || rating === 0) {
      setAvg(rating)
    }
  }, [avgRating, rating])


  return (
    <Star className={'stars-outer'}>
      <div className={'stars-inner'} style={{width: (avg*20) + '%'}}></div>
    </Star>
  )
}

export default StarRating;