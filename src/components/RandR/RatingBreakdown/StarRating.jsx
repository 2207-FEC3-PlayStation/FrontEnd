import React, {useEffect, useState} from 'react';
import server from '../../../serverRequests.js';

function StarRating({avgRating, rating, product_id}) {
  //if a rating props is passed in, this component will take that value. Otherwise it will default to the average rating for the overall product
  const [defaultAvg, setDefaultAvg] = useState();

  useEffect(() => {
    if (!avgRating && !rating && product_id) {
      server.get('/reviews/meta', {'product_id': product_id})
        .then((data) => {
          let sum = 0;
          let reviewCount = 0;
          for(var key in data.data.ratings) {
            let thisKey = parseInt(key);
            let thisVal = parseInt(data.data.ratings[key]);
            reviewCount += thisVal;
            sum += thisVal * thisKey;
          }
          let average = (Math.round(4 * sum / reviewCount) / 4).toFixed(2);
          let tenth = (Math.round(4 * sum / reviewCount) / 4).toFixed(1);
          setDefaultAvg(average);
        })

    }
  }, [product_id])


  let starRating = rating || avgRating || defaultAvg;
  return (
    <div className={'stars-outer'}>
      <div className={'stars-inner'} style={{width: starRating*20 + '%'}}></div>
    </div>
  )
}

export default StarRating;