import React, { useState, useEffect} from 'react';
import ReviewList from './Reviews/ReviewList.jsx';
import server from '../../serverRequests.js';

function Reviews({product_id}) {

  const [totalReviews, setTotalReviews] = useState();
  const [showReviews, setShowReviews] = useState(2);
  const [sortedBy, setSortedBy] = useState({relevant: 'relevance'});
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    if (product_id) {
      let sort = Object.keys(sortedBy)[0];
      server.get('/reviews', {'sort': sort, 'product_id': product_id})
        .then((res) => {
          setTotalReviews(res.data.count);
          setReviews(res.data.results)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [product_id ,sortedBy])

  return (
    <div style={{width: '60%', display: 'inline-block', verticalAlign: 'top'}}>
      <h3>{totalReviews} reviews, sorted by {Object.values(sortedBy)[0]}</h3>
      <ReviewList reviews={reviews.slice(0, showReviews)}/>
      {/* {reviews.slice(0, showReviews).map((review) => {
        return <ReviewList key={review.review_id} data={review} />
      })} */}
      <button style={{display: 'inline-block', margin: '10px'}}>More Reviews</button>
      <button style={{display: 'inline-block', margin: '10px'}}>Add a Review</button>
    </div>
  )
}

export default Reviews;