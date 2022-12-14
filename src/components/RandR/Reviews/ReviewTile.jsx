import React, { useState, useEffect } from 'react';
import StarRating from '../RatingBreakdown/StarRating.jsx';
import server from '../../../serverRequests.js'
import ImageModal from './ImageModal.jsx';
import styled from 'styled-components';

const Tile = styled.div`
  border-bottom: 1px solid black;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const Button = styled.div`
  display: inline-block;
  text-decoration: underline;
  font-size: 11px;
  margin: 4px;
`

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 30px;
`

const UserData = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const Response = styled.div`
  background-color: #d9d5d5;
  padding-left: 15px;
  border-radius: 5px;
  white-space: pre-line;
`

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-height: 25px
`

function ReviewTile({ data }) {

  const [date, setDate] = useState()
  const [helpfulness, setHelpfulness] = useState()
  const [addedHelpful, setAddedHelpful] = useState(false)
  const [report, setReport] = useState({ text: 'Report', reported: false })
  const [modalImg, setModalImg] = useState()
  const [modalImgDisplay, setModalImageDisplay] = useState(false)
  const [showBody, setShowBody] = useState(250)
  const [ellipsis, setEllipsis] = useState('...')
  const [showMore, setShowMore] = useState('showMore')
  const [recommend, setRecommend] = useState('none')
  const [response, setResponse] = useState('none')


  //------------useEffect methods------------

  useEffect(() => {
    if (data.recommend === true) {
      setRecommend('block')
    }
    if (data.response !== null) {
      setResponse('block');
    }
  }, [data])

  useEffect(() => {
    let year = data.date.substring(0, 4);
    //because of the weird way JS handles months 0-11
    let month = parseInt(data.date.substring(5, 7));
    month = JSON.stringify(month - 1);
    if (month.length === 1) {
      month = '0' + month
    }
    //same issue with days but apparently opposite?
    let day = parseInt(data.date.substring(8, 10));
    day = JSON.stringify(day + 1);
    if (day.length === 1) {
      day = "0" + day
    }
    let date = new Date(Date.UTC(year, month, day, 0, 0, 0));
    date = date.toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
    date = date.split(',');
    setDate(date[0] + ',' + date[1])
  }, [data]);

  useEffect(() => {
    if (data) {
      setHelpfulness(data.helpfulness);
      if (data.body.length < 250 || showBody === data.body.length) {
        setEllipsis('');
        setShowMore('moreShown')
      }
    }
  }, [data, data.helpfulness, showBody]);


  //------------Event Handlers------------

  let increaseHelpful = (e) => {
    if (addedHelpful === false) {
      server.put('/reviews/helpful', { review_id: data.review_id })
        .then(() => { })
        .catch((err) => {
          console.log('error: ', err)
        })
      setHelpfulness(helpfulness + 1);
      setAddedHelpful(true);
    }
  }

  let reportReview = (e) => {
    server.put('/reviews/report', { review_id: data.review_id });
    setReport({ text: 'Reported', reported: true });
  }

  let displayImg = (e) => {
    setModalImageDisplay(true);
    setModalImg(e.target.src);
  }

  let closeImg = (e) => {
    setModalImageDisplay(false);
    setModalImg();
  }

  let expandBody = (e) => {
    setShowBody(data.body.length);
    e.target.className = 'moreShown';
  }

  return (
    <Tile>
      {/*Thumbnail photo modals*/}
      <ImageModal image={modalImg} display={modalImgDisplay} closeImg={closeImg}></ImageModal>
      {/*Stars and user data*/}
      <TopRow>
        <StarRating rating={data.rating} />
        <UserData>
          <h6 style={{ marginRight: '5px' }}>{data.reviewer_name}</h6>
          <h6>{date}</h6>
        </UserData>
      </TopRow>
      {/*Summary*/}
      <h3 style={{ margin: '5px 0' }}>{data.summary}</h3>
      {/*Body*/}
      <p style={{ margin: '5px, 0' }}>{data.body.substring(0, showBody) + `${ellipsis}`}</p>
      <Button className={showMore} onClick={expandBody}>Show More</Button>
      {/*Photo Thumbnails*/}
      <span style={{ display: 'block' }}>
        {data.photos.map((photo) => {
          return <img key={photo.id} src={photo.url} onClick={displayImg} style={{ height: '35px', width: 'auto', margin: '3px' }}></img>
        })}
      </span>
      {/*Recommend*/}
      <p className='checkMark' style={{ fontSize: '12px', display: recommend }}>I recommend this product!</p>
      {/*Seller Response*/}
      <Response style={{ display: response }} >Response from seller:{'\n' + data.response}</Response>
      {/*User interaction*/}
      <BottomRow>
        <h6 style={{ display: 'inline-block' }}>Was this review helpful?</h6>
        <Button onClick={increaseHelpful} >Yes</Button>
        <Button>{'(' + helpfulness + ')'}</Button>
        <Button onClick={reportReview}>{report.text}</Button>
      </BottomRow>
    </Tile>
  )
}

export default ReviewTile;