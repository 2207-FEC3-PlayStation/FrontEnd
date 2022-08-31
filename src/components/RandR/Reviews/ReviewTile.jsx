import React, { useState, useEffect } from 'react';
import StarRating from '../RatingBreakdown/StarRating.jsx';
import server from '../../../serverRequests.js'

function ReviewTile({data}) {

  const [date, setDate] = useState();
  const [helpfulness, setHelpfulness] = useState();

  let recommend = 'none';
  if (data.recommend === true) {
    recommend = 'block';
  }

  let response = 'none';
  if (data.response !== null) {
    response = 'block';
  }

  useEffect(() => {
    let year = data.date.substring(0, 4);
    let month = data.date.substring(6, 7);
    let day = data.date.substring(9, 10);
    let date = new Date(Date.UTC(year, month, day, 0, 0, 0));
    date = date.toLocaleString('en-US');
    date = date.split(',');
    setDate(date[0])
  }, [data]);

  useEffect(() => {
    if (data) {
      setHelpfulness(data.helpfulness);
    }
    }, [data, data.helpfulness]);

  let increaseHelpful = (e) => {
    //uncomment when put request is functioning.
    //server.put('/reviews/helpful', {review_id: data.review_id});
    setHelpfulness(helpfulness + 1)
  }


  return (
    <div style={{borderBottom: '1px solid black', padding: '5px'}}>
      <StarRating rating={data.rating}/>

      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right', marginLeft: '5px'}}>{data.reviewer_name}</h6>

      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right'}}>{date}</h6>

      <p style={{fontWeight: 'bold'}}>{data.summary}</p>

      <p>{data.body}</p>

      <p className='checkMark' style={{fontSize: '12px', display: recommend}}>I recommend this product!</p>

      <p style={{paddingLeft: '15px', display: response, whiteSpace: 'pre-line'}}>Seller Response:{'\n' + data.response}</p>

      <h6 style={{display: 'inline-block'}}>Helpful?</h6>
      <h6 onClick={increaseHelpful} style={{display: 'inline-block', textDecoration: 'underline', margin: '10px'}}>Yes</h6>
      <h6 style={{display: 'inline-block', marginLeft: '3px'}}>{helpfulness}</h6>

      <button style={{display: 'inline-block', margin: '10px'}}>Report</button>

    </div>
  )
}

export default ReviewTile;