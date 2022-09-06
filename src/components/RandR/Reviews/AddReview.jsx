import React, { useState, useEffect} from 'react';
import server from '../../../serverRequests.js';
import styled from 'styled-components';
import StarRating from '../RatingBreakdown/StarRating.jsx';
import RateCharacteristics from './RateCharacteristics.jsx';

const Modal = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center
  z-index: 20;
  max-width: 100vw;
  max-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto
`

const ModalInput = styled.div`
  position: absolute;
  top: 10%;
  padding: 5%;
  display: flex;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 30;
  width: 80%;
  height: 80%;
`

const StarHolder = styled.div`
`

const StarClicks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Star = styled.div`
  display: flex;
  position: relative;
`
const RecHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
`


function AddReview({display, product_id, close}) {

  const [product, setProduct] = useState();
  const [characteristics, setCharacteristics] = useState({});
  const [rating, setRating] = useState(0);
  const [ratingDesc, setRatingDesc] = useState(' ');
  const [starFills, setStarFills] = useState(['singleStar', 'singleStar', 'singleStar', 'singleStar', 'singleStar'])
  const [recommended, setRecommended] = useState(false);

//--------UseEffects--------

  useEffect(() => {
    if (product_id) {
      server.get('/product', {'product_id': product_id})
        .then((res) => {
          setProduct(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [product_id]);

  useEffect(() => {
    var stars = starFills.slice();
    for (var i = 0; i < rating; i++) {
      stars[i] = ('singleStarFilled')
    }
    for (var i = rating; i <= 5; i++) {
      stars[i] = ('singleStar')
    }
    setStarFills(stars);
  }, [rating])

  useEffect(() => {
    if (product) {
      server.get('/reviews/meta', {'product_id': product.id})
        .then((res) => {
          let chars = res.data.characteristics;
          let charObj = {};
          for (var char in chars) {
            charObj[char] = 6;
          }
          setCharacteristics(charObj)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [product])

//-------------Event Handlers----------

  let selectStar = (e) => {
    let clicked = e.target.id;
    setRating(parseInt(clicked));
    let desc;
    switch (clicked) {
      case "1" :
        desc = 'Poor';
        break;
      case "2" :
        desc = 'Fair';
        break;
      case "3" :
        desc = 'Average';
        break;
      case "4" :
        desc = 'Good';
        break;
      case "5" :
        desc = 'Great';
        break;
    }
    setRatingDesc(desc);
  }

  let recommend = (e) => {
    let clicked = e.target.value;
    if (clicked === 'yes') {
      setRecommended(true)
    } else {
      setRecommended(false)
    }
  }

  let updateChar = (e) => {
    let currentChars = {};
    for (var key in characteristics) {
      currentChars[key] = characteristics[key]
    }
    let clickedChar = e.target.name;
    let clickedVal = e.target.value;
    currentChars[clickedChar] = parseInt(clickedVal);
    setCharacteristics(currentChars);
  }

  if (display) {
    return (
      <Modal>
        <ModalInput>
          <h2 style={{marginBottom: '5px'}}>Write Your Review</h2>
          <h3 style={{marginTop: '5px'}}>About {product.name}</h3>
          <StarClicks>
            <Star className={starFills[0]} id={1} onClick={selectStar}></Star>
            <Star className={starFills[1]} id={2} onClick={selectStar}></Star>
            <Star className={starFills[2]} id={3} onClick={selectStar}></Star>
            <Star className={starFills[3]} id={4} onClick={selectStar}></Star>
            <Star className={starFills[4]} id={5} onClick={selectStar}></Star>
            <p style={{alignSelf: 'flex-end'}}>{'\t' + ratingDesc}</p>
          </StarClicks>
          <RecHolder>
            <p>Do you recommend this product?</p>
            <input style={{display: 'inline-block'}} type='radio' id='yes' name='recommend' value='yes' onClick={recommend}></input>
            <label htmlFor='yes'>Yes</label>
            <input style={{display: 'inline-block'}} type='radio' id='no' name='recommend' value='no' onClick={recommend}></input>
            <label htmlFor='no'>No</label>
          </RecHolder>
          <h5>Characteristics</h5>
          {Object.keys(characteristics).map((char) => {
            return (
              <RateCharacteristics key={char} char={char} selected={characteristics[char]} updateChar={updateChar}></RateCharacteristics>
            )
          })}
          <ButtonHolder>
            <button style={{display: 'inline-block'}}>Submit</button>
            <button style={{display: 'inline-block'}} onClick={close}>Cancel</button>
          </ButtonHolder>
        </ModalInput>
      </Modal>
    )
  } else {
    return null
  }
}

export default AddReview;