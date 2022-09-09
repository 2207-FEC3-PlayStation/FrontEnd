import React, { useState, useEffect} from 'react';

import AddReview from './Reviews/AddReview.jsx';
import ReviewTile from './Reviews/ReviewTile.jsx';
import server from '../../serverRequests.js';
import styled from 'styled-components';

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  min-width: 75%;
`
const Topper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  margin: 5px 0;
  min-width: 350px;
  `

const List = styled.div`
  display: flex;
  position: absolute;
  top: 25;
  flex-direction: column;
  margin-top: 25px;
  min-width: 600px;
  max-height: 600px;
  flex-basis: 80%;
  overflow-y: auto;
  overflow-x: hidden;
`
const Tile = styled.div`
`


const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
`

function Reviews({product_id, count, ratingFilter}) {

  const [totalReviews, setTotalReviews] = useState();
  const [reviewsPage, setReviewsPage] = useState(1);
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
    if (product_id && count && ratingFilter) {
      let sort = Object.keys(sortedBy)[0];
      server.get('/reviews', {'sort': sort, 'product_id': product_id, 'count': count, 'page': reviewsPage})
        .then((res) => {
          setTotalReviews(res.data.count);
          let allReviews = res.data.results;
          if (ratingFilter.length === 0) {
            setReviews(allReviews);
          } else {
            allReviews = allReviews.filter(review => ratingFilter.indexOf(review.rating) !== -1)
            setReviews(allReviews)
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [product_id, sortedBy, count, ratingFilter, reviewsPage])

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
    if (e) {
      e.preventDefault();
    }
    setShowAddReview(false);
  }

  return (
    <ReviewBox>
      <AddReview display={showAddReview} product_id={product_id} close={closeModal}></AddReview>

      <Topper>
        <h3 style={{margin: '0'}}>{totalReviews} reviews, sorted by </h3>
        <label style={{display: 'none'}}>Sort on</label>
        <select onChange={changeSort} style={{height: '50%', marginLeft: '5px'}}>{Object.values(sortedBy)[0]}
          <option value='relevance'>relevance</option>
          <option value='most helpful'>most helpful</option>
          <option value='newest'>newest</option>
        </select>
      </Topper>

      <List>
        {reviews.slice(0, showReviews).map((review) => {
          return (
            <Tile key={review.review_id}>
          <ReviewTile  data={review} />
        </Tile>
        )
      })}
        <ButtonHolder>
          <button onClick={moreReviews} style={{display: showMoreReviews, margin: '10px', backgroundColor: '#006FCD', color: 'white'}}>More Reviews</button>

          <button style={{display: 'inline-block', margin: '10px', backgroundColor: '#006FCD', color: 'white'}} onClick={openAddReview}>Add a Review</button>
        </ButtonHolder>
      </List>


    </ReviewBox>
  )
}

export default Reviews;