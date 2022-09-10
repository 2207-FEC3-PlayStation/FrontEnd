import React, { useEffect, useState } from 'react';
import server from '../../../serverRequests.js';
import styled from 'styled-components';

const Star = styled.div`
  z-index: 0;
`

function StarRating({ avgRating, rating }) {
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
      <div className={'stars-inner'} style={{ width: (avg * 20) + '%' }}></div>
    </Star>
  )
}

export default StarRating;