import React, { useState, useEffect } from 'react';
import StarRating from '../RatingBreakdown/StarRating.jsx';

function ReviewTile({data, icon}) {

  const [date, setDate] = useState();

  useEffect(() => {
    let year = data.date.substring(0, 4);
    let month = data.date.substring(6, 7);
    let day = data.date.substring(9, 10);
    let date = new Date(Date.UTC(year, month, day, 0, 0, 0));
    date = date.toLocaleString('en-US');
    date = date.split(',');
    setDate(date[0])
  }, [data])

  return (
    <div style={{borderBottom: '1px solid black', padding: '5px'}}>
      <StarRating rating={data.rating}/>

      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right', marginLeft: '5px'}}>{data.reviewer_name}</h6>

      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right'}}>{date}</h6>

      <p style={{fontWeight: 'bold'}}>{data.summary}</p>

      <p>{data.body}</p>
      <h4 className='checkMark'>'I recommend this product!'</h4>

      <p style={{paddingLeft: '15px'}}>Seller Response</p>

      <button style={{display: 'inline-block', margin: '10px'}}>Helpful?</button>

      <button style={{display: 'inline-block', margin: '10px'}}>Report</button>

    </div>
  )
}

export default ReviewTile;