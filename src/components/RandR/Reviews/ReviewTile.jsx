import React from 'react';
import StarRating from '../RatingBreakdown/StarRating.jsx';

function ReviewTile(props) {
  return (
    <div style={{borderBottom: '1px solid black', padding: '5px'}}>
      <StarRating rating={3.0}/>
      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right'}}>User</h6>
      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right'}}>Date</h6>
      <p style={{fontWeight: 'bold'}}>Review Summary</p>
      <p>Review Body</p>
      <h5>I recommend this product</h5>
      <p style={{paddingLeft: '15px'}}>Seller Response</p>
      <button style={{display: 'inline-block', margin: '10px'}}>Helpful?</button>
      <button style={{display: 'inline-block', margin: '10px'}}>Report</button>
    </div>
  )
}

export default ReviewTile;