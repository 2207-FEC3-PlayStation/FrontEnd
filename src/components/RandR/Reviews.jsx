import React, { useState, useEffect} from 'react';
import ReviewList from './Reviews/ReviewList.jsx';
import AddReview from './Reviews/AddReview.jsx';
import server from '../../serverRequests.js';
import styled from 'styled-components';


function Reviews({product_id, count}) {

  const [totalReviews, setTotalReviews] = useState();
  const [showReviews, setShowReviews] = useState(2);
  const [sortedBy, setSortedBy] = useState({relevant: 'relevance'});
  const [reviews, setReviews] = useState([]);
  const [showMoreReviews, setShowMoreReviews] = useState('inline-block');
  const [showAddReview, setShowAddReview] = useState(false);

  //--------useEffect methods--------

  useEffect(() => {
    if (totalReviews <= 2 || showReviews >= totalReviews) {
      setShowMoreReviews('none');
    }
  }, [totalReviews, showReviews])


  useEffect(() => {
    if (product_id && count) {
      let sort = Object.keys(sortedBy)[0];
      server.get('/reviews', {'sort': sort, 'product_id': product_id, 'count': count})
        .then((res) => {
          setTotalReviews(res.data.count);
          setReviews(res.data.results)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [product_id, sortedBy, count])

//---------event Handlers---------

  let changeSort = (e) => {
    let choice = e.target.value;
    if (choice === 'relevance') {
      setSortedBy({relevant: choice})
    } else if (choice === 'most helpful')  {
      setSortedBy({helpful: choice})
    } else if (choice === 'newest') {
      setSortedBy({newest: choice})
    }
    // setSortedBy(e.target)
  }

  let moreReviews = (e) => {
    e.preventDefault();
    setShowReviews(showReviews + 2);
  }

  let openAddReview = (e) => {
    e.preventDefault();
    setShowAddReview(true);
  }

  let closeModal = (e) => {
    e.preventDefault();
    setShowAddReview(false);
  }

  return (
    <div>
      <AddReview display={showAddReview} product_id={product_id} close={closeModal}></AddReview>
      <h3 style={{display: 'inline-block'}}>{totalReviews} reviews, sorted by </h3>

      <label style={{display: 'none'}}>Sort on</label>
      <select onChange={changeSort} style={{display: 'inline-block'}}>{Object.values(sortedBy)[0]}
        <option value='relevance'>relevance</option>
        <option value='most helpful'>most helpful</option>
        <option value='newest'>newest</option>
      </select>

      <ReviewList reviews={reviews.slice(0, showReviews)}/>

      <button onClick={moreReviews} style={{display: showMoreReviews, margin: '10px'}}>More Reviews</button>

      <button style={{display: 'inline-block', margin: '10px'}} onClick={openAddReview}>Add a Review</button>
    </div>
  )
}

export default Reviews;