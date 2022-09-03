import React, { useState, useEffect } from 'react';
import StarRating from '../RatingBreakdown/StarRating.jsx';
import server from '../../../serverRequests.js'
import ImageModal from './ImageModal.jsx';

function ReviewTile({data}) {

  const [date, setDate] = useState();
  const [helpfulness, setHelpfulness] = useState();
  const [addedHelpful, setAddedHelpful] = useState(false);
  const [report, setReport] = useState({text: 'Report', reported: false})
  const [modalImg, setModalImg] = useState()
  const [modalImgDisplay, setModalImageDisplay] = useState(false)


//-----------conditional rendering variables-----

  let recommend = 'none';
  if (data.recommend === true) {
    recommend = 'block';
  }

  let response = 'none';
  if (data.response !== null) {
    response = 'block';
  }

//------------useEffect methods -------

  useEffect(() => {
    console.log(data.date);
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
    date = date.toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'});
    date = date.split(',');
    console.log(date);
    setDate(date[0] + ',' + date[1])
  }, [data]);

  useEffect(() => {
    if (data) {
      setHelpfulness(data.helpfulness);
    }
  }, [data, data.helpfulness]);


//----------Event Handlers--------------

  let increaseHelpful = (e) => {
    if (addedHelpful === false) {
      server.put('/reviews/helpful', {review_id: data.review_id})
        .then(() => {})
        .catch((err) => {
          console.log('error: ', err)
        })
      setHelpfulness(helpfulness + 1);
      setAddedHelpful(true);
    }
  }

  let reportReview = (e) => {
    server.put('/reviews/report', {review_id: data.review_id});
    setReport({text: 'Reported', reported: true});
  }

  let displayImg = (e) => {
    setModalImageDisplay(true);
    setModalImg(e.target.src);
  }

  let closeImg = (e) => {
    setModalImageDisplay(false);
    setModalImg();
  }


  return (
    <div style={{borderBottom: '1px solid black', padding: '5px'}}>
      <ImageModal image={modalImg} display={ modalImgDisplay} closeImg={closeImg}></ImageModal>
      <StarRating rating={data.rating}/>

      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right', marginLeft: '5px'}}>{data.reviewer_name}</h6>

      <h6 style={{display: 'inline-block', verticalAlign: 'top', float: 'right'}}>{date}</h6>

      <p style={{fontWeight: 'bold'}}>{data.summary}</p>

      <p>{data.body}</p>

      <span style={{display: 'block'}}>
        {data.photos.map((photo) => {
          return <img key={photo.id} src={photo.url} onClick={displayImg} style={{height: '35px', width: 'auto', margin: '3px'}}></img>
        })}
      </span>

      <p className='checkMark' style={{fontSize: '12px', display: recommend}}>I recommend this product!</p>

      <p style={{paddingLeft: '15px', display: response, whiteSpace: 'pre-line'}}>Response from seller:{'\n' + data.response}</p>


      <h6 style={{display: 'inline-block'}}>Was this review helpful?</h6>

      <h6 onClick={increaseHelpful} style={{display: 'inline-block', textDecoration: 'underline', margin: '3px'}}>Yes</h6>
      <h6 style={{display: 'inline-block'}}>{'(' + helpfulness + ')'}</h6>

      {/* do we need a 'no' button?????*/}

      <h6 onClick={reportReview} style={{display: 'inline-block', textDecoration: 'underline',  margin: '4px'}}>{report.text}</h6>

    </div>
  )
}

export default ReviewTile;