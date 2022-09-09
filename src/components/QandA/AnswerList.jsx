import React, { useState, useEffect, useContext } from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import ImageModal from './Modals/PhotoModal.jsx';
import axios from 'axios';
import server from '../../serverRequests.js';
import swal from 'sweetalert';

const Image = styled.img`
  border-radius: 8px;
  display: inline-block;
  max-height: 80px;
  max-width: 80px;
  margin-right: 10px;
  margin-top: 3px;
`

const AnswerContainer = styled.div`
  text-transform: none;
  margin-bottom: 0.5em;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: default;

`

const AnswerBody = styled.div`
  margin: 5px 15px 0 15px;
`

const Helpful = styled.div`
  display: incline;
  text-align: right;
  font-size: 12px;
`

const Yes = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: underline;
  &:hover {
    color: darkgreen;
    transform: scale(1.05);
  }
`

const Report = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: underline;
  &:hover {
    color: crimson;
    transform: scale(1.05);
  }
`

const User = styled.div`
  margin-top: 10px;
  margin-left: 25px;
  margin-bottom: 10px;
`

const Size = styled.span`
  text-size: 8px;
`

function AnswersList ({answer, id, productName, question_id, aRerender, setARerender, handleHelpful, handleReported}) {
  let {answer_id, body, date, answerer_name, helpfulness, photos} = answer;
  let [modal, setModal] = useState(false);
  let [url, setUrl] = useState('');
  let [aHelpful, setAHelpful] = useState(false);
  let [aReported, setAReported] = useState(false);

  const toggleModal = (e) => {
    setUrl(e.target.currentSrc);
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <AnswerContainer>
      <AnswerBody>
      <span>{body}</span>
      <User>
        <div>
          {photos.map((photo) => {
            return  <Image
                      key={photo.url}
                      src={photo.url}
                      onClick={toggleModal}
                      alt="unable to display">
                    </Image>
          })}
          {modal && (
            <ImageModal
              key={url}
              url={url}
              toggleModal={toggleModal}
              modal={modal}
            />)
          }
          <div>
            {answerer_name.toLowerCase() === "seller" ?
              <Size>by <b>Seller</b>, </Size> :
              <Size>by {answerer_name}, </Size>
            }
            <span> {format(parseISO(date), 'MMMM dd, yyyy')}&emsp;|&emsp;</span>
          Helpful?
          <Yes onClick={() =>
            handleHelpful(
              aHelpful,
              'answers',
              answer_id,
              'helpful',
              setAHelpful,
              aRerender,
              setARerender)}
          >Yes &#40;{helpfulness}&#41;
          </Yes>&emsp;|&emsp;
          <Report onClick={() =>
            handleReported(
              aReported,
              'answers',
              answer_id,
              'report',
              setAReported
            )}> {aReported ? 'Reported' : 'Report'} </Report>
          </div>
        </div>
      </User>
      </AnswerBody>
    </AnswerContainer>
  )
}

export default AnswersList;