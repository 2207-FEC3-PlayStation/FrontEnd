import React, { useState, useEffect } from 'react';
import server from '../../../serverRequests.js';
import styled from 'styled-components';
import StarRating from '../RatingBreakdown/StarRating.jsx';
import RateCharacteristics from './RateCharacteristics.jsx';
import AddImg from './AddImg.jsx';

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
  align-items: center;
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
  padding: 5%;
  display: flex;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 30;
  max-width: 80%;
  min-width: 50%;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
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
  margin: 5px;
`

const SummaryAndBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  width: 70%
`

const SubText = styled.div`
  font-size: 10px;
`


function AddReview({ display, product_id, close }) {

  const [product, setProduct] = useState();
  const [characteristics, setCharacteristics] = useState({});
  const [rating, setRating] = useState(0);
  const [ratingDesc, setRatingDesc] = useState(' ');
  const [starFills, setStarFills] = useState(['singleStar', 'singleStar', 'singleStar', 'singleStar', 'singleStar'])
  const [recommended, setRecommended] = useState(undefined);
  const [photos, setPhotos] = useState([]);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [minChars, setMinChars] = useState('Minimum required characters left: 50');
  const [addImgDisplay, setAddImgDisplay] = useState(false);

  //--------UseEffects--------

  useEffect(() => {
    if (product_id) {
      server.get('/product', { 'product_id': product_id })
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
      server.get('/reviews/meta', { 'product_id': product.id })
        .then((res) => {
          let chars = res.data.characteristics;
          for (var char in chars) {
            chars[char].value = 6;
          }
          setCharacteristics(chars)
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
      case "1":
        desc = 'Poor';
        break;
      case "2":
        desc = 'Fair';
        break;
      case "3":
        desc = 'Average';
        break;
      case "4":
        desc = 'Good';
        break;
      case "5":
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
    currentChars[clickedChar].value = parseInt(clickedVal);
    setCharacteristics(currentChars);
  }

  let updateSummary = (e) => {
    e.preventDefault();
    let content = e.target._valueTracker.getValue();
    setSummary(content);
  }

  let updateBody = (e) => {
    e.preventDefault();
    let content = e.target._valueTracker.getValue()
    let length = content.length;
    let defaultText = 'Minimum required characters left: ';
    if (length >= 50) {
      setMinChars('Minimum reached')
    } else {
      let remainingChars = 50 - length;
      setMinChars(defaultText + remainingChars)
    }
    setBody(content);
  }

  let displayAddImage = (e) => {
    if (e) {
      e.preventDefault();
    }
    setAddImgDisplay(!addImgDisplay);
  }

  let addPhotos = (urls) => {
    setPhotos([...photos, urls])
  }

  let updateNickname = (e) => {
    let content = e.target._valueTracker.getValue();
    setNickName(content)
  }

  let updateEmail = (e) => {
    let content = e.target._valueTracker.getValue();
    setEmail(content)
  }

  let submit = (e) => {
    e.preventDefault();
    let data = {};
    data.product_id = product_id;
    data.rating = rating;
    data.summary = summary;
    data.body = body;
    data.recommend = recommended;
    data.name = nickName;
    data.email = email;
    data.photos = photos;
    let chars = {};
    for (var char2 in characteristics) {
      let charId = characteristics[char2].id;
      chars[charId] = characteristics[char2].value;
    }
    data.characteristics = chars;
    if (rating === 0) {
      alert('Please make a selection of 1-5 stars')
    } else {}
    server.post('/reviews', data)
      .then(() => {
        close();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  if (display) {
    return (
      <Modal>
        <AddImg display={addImgDisplay} addPhotos={addPhotos} displayAddImage={displayAddImage}></AddImg>
        <ModalInput>
          <form onSubmit={submit}>

            <h2 style={{ marginBottom: '5px' }}>Write Your Review</h2>
            <h3 style={{ marginTop: '5px' }}>About {product.name}</h3>
            <StarClicks>
              <Star className={starFills[0]} id={1} onClick={selectStar}></Star>
              <Star className={starFills[1]} id={2} onClick={selectStar}></Star>
              <Star className={starFills[2]} id={3} onClick={selectStar}></Star>
              <Star className={starFills[3]} id={4} onClick={selectStar}></Star>
              <Star className={starFills[4]} id={5} onClick={selectStar}></Star>
              <p style={{ alignSelf: 'flex-end' }}>{'\t' + ratingDesc}</p>
            </StarClicks>
            <RecHolder>
              <p>Do you recommend this product?</p>
              <input style={{ display: 'inline-block' }} type='radio' id='yes' name='recommend' value='yes' required onClick={recommend}></input>
              <label htmlFor='yes'>Yes</label>
              <input style={{ display: 'inline-block' }} type='radio' id='no' name='recommend' value='no' onClick={recommend}></input>
              <label htmlFor='no'>No</label>
            </RecHolder>
            <h5>Characteristics</h5>
            {Object.keys(characteristics).map((char) => {
              return (
                <RateCharacteristics key={char} char={char} selected={characteristics[char]} updateChar={updateChar}></RateCharacteristics>
              )
            })}
            <SummaryAndBody>
              <label htmlFor='summary'>Review Summary</label>
              <input id='summary' className='inputField' type='text' maxLength='60' onChange={updateSummary} required></input>
              <label htmlFor='reviewBody'>Review Body</label>
              <textarea id='reviewBody' className='inputField' rows='5' minLength='50' maxLength='1000' onChange={updateBody} required></textarea>
              <SubText>{minChars}</SubText>
            </SummaryAndBody>
            <button style={{ margin: '10px' }} onClick={displayAddImage}>Add Pictures</button><br></br>
            <label htmlFor='nickname'>Nickname</label><br></br>
            <input className='inputField' id='nickname' placeholder='Example: jackson11!' maxLength='60' onChange={updateNickname} required></input>
            <label htmlFor='email'>Email</label>
            <input type='email' className='inputField' id='email' placeholder='Example: jackson11@email.com' maxLength='60' onChange={updateEmail} required></input>
            <SubText>For authentication reasons, you will not be emailed</SubText>
            <ButtonHolder>
              <button style={{marginRight: '10px'}} >Submit</button>
              <button onClick={close}>Cancel</button>
            </ButtonHolder>
          </form>
        </ModalInput>
      </Modal>
    )
  } else {
    return null
  }
}

export default AddReview;