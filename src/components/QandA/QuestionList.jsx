import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import server from '../../serverRequests.js';
// import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
// import AnswersList from './AnswersList.jsx';
// import AnswerModal from './Modals/AnswerModal.jsx';
import swal from 'sweetalert';

const Questions = styled.div`
  display: flex;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 5px;
  height: auto;
  min-width: 80%;
  margin-top: 10px;
  transition: background-color 0.35s ease-out 0s;
  flex-direction: column;
  align-items: center;
  -webkit-transition: background-color .35s ease-out;
  -moz-transition: background-color .35s ease-out;
  -o-transition: background-color .35s ease-out;
  transition: background-color .35s ease-out;
  cursor: ns-resize;
  &:hover {
    background-color: rgba(255, 0, 0, .2);
    // transform: scale(1.03);
  }
  @media {
    width: 65vw;
  }
`;

const QStyle = styled.div`
  font-size: 1em;
  cursor: ns-resize;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const AnswersBlock = styled.div`

`

const AStyle = styled.div`
  font-size: 1.2em;
  margin-bottom: 0.5em;
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
`;

const ContainText = styled.p`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  -webkit-box-align: stretch;
  margin-bottom: 10px;
  align-items: stretch;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  cursor: ns-resize;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid grey;
  margin: 0 0 1em 1em;
  padding: 0.5em 1em;
  display: block;
  &:hover {
    background: lightgrey;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
    transform: scale(1.05);
  }
`;

const Helpful = styled.div`
  text-align: center;
  font-size: 14px;
  margin-right: 5px;
  margin-top: 5px;
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
  cursor: context-menu;
  outline: inherit;
  text-decoration: underline;
  &:hover {
    color: crimson;
    transform: scale(1.05);
  }
`

const AddAnswer = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: copy;
  outline: inherit;
  text-decoration: underline;
  &:hover {
    color: #6B5B95;
    transform: scale(1.05);response
  }
`

const NoAnswers = styled.div`
  text-transform: none;
  margin-left: 50px;
`

const AnswerList = styled.div`
  padding: 0 10px 5px 10px;
  display: inline-block;
  cursor: default;
`

function QuestionList ({question, id, productName, qRerender, setQRerender}) {
  const {question_id, question_body, question_helpfulness} = question;
  const [answers, setAnswers] = useState(null);
  const [answerCount, setAnswerCount] = useState(2);
  const [questionClicked, setQuestionClicked] = useState(false);
  const [seeMoreClicked, setSeeMoreClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [qHelpful, setQHelpful] = useState(false);
  const [aRerender, setARerender] = useState(0);
  const [qReported, setQReported] = useState(false);
  const [loading, setLoading] = useState(false);


  const getAnswers = () => {
    console.log('question id = ', question.questionID)

    setLoading(true);
    server.get('/qa/answers', { 'question_id': question.questionID})
      .then(response => {
        console.log('response: ', response);
        setAnswers(response.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Unable to get answers. Sorry...', err);
      })
  }

  const handleShowingAnswers = () => {
    console.log('Q was clicked!');
    if (questionClicked) {
      setQuestionClicked(!questionClicked);
    } else {
      console.log('getting answers..');
      getAnswers();
      setQuestionClicked(!questionClicked);
    }
  }

  // const handleHelpful = (stateVariable, qOrA, id, helpful, setStateVariable, rerender, setRerender) => {
  //   // console.log(`/qa/${qOrA}/${id}/${helpful}`);
  //   if (stateVariable) {
  //     swal("Helpful?", "We only allow one click of 'Yes'. Thank you for your feedback. It helps others in their decision making.", "error");
  //   } else {
  //     axios
  //       .put(`/qa/${qOrA}/${id}/${helpful}`)
  //       .then(() => {
  //         // setYesCount(yesCount + 1);
  //         setStateVariable(true);
  //         return getAnswers();
  //       })
  //       .then(response => {
  //         swal("Thank You", `Thank you for your feedback regarding this ${qOrA.slice(0, -1)}. People come to our site because of your feedback.`, "success");
  //       })
  //       .catch(err => console.error(err))
  //       .then(() => {
  //         setRerender(rerender + 1);
  //         console.log(rerender);
  //       });
  //   }
  // }

  // const handleReported = (stateVariable, qOrA, id, report, setStateVariable) => {
  //   // console.log(`/qa/${qOrA}/${id}/${report}`);
  //   if (stateVariable) {
  //     swal("Helpful?", "We only allow fone click of 'Reported'. We will review this as soon as possible.", "error");
  //   } else {

  //     axios
  //       .put(`/qa/${qOrA}/${id}/${report}`)
  //       .then(() => {
  //         setStateVariable(true);
  //         let customerSupport = `We have marked this ${qOrA.slice(0, -1)} as "Reported" and will perform a formal review.`
  //         swal("Thank You", `Thank you for your feedback regarding this ${qOrA.slice(0, -1)}. People come to our site because of your feedback. ${report === 'report' ?customerSupport : ''}`, "success");
  //       })
  //       .catch(err => {
  //         swal('An error happened...', 'Unfortunately, there was an error on our side. Please try again in a little bit.', 'error');
  //         // console.error(err);
  //       })
  //   }
  // }

  const seeMoreAnswers = (
    <Button onClick={() => {
      setAnswerCount(answerCount + answers.length - 2)
      setSeeMoreClicked(!seeMoreClicked);
      }}>
      LOAD MORE ANSWERS
    </Button>
  )
  const collapseAnswers = (
    <Button onClick={() => {
      handleShowingAnswers(false);
      setLoading(false);
      setAnswerCount(2);
      setSeeMoreClicked(!seeMoreClicked);
    }}>
      Collapse answers
    </Button>
  )

  if (show) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <Questions >
      <Container onClick={handleShowingAnswers}>
        <QStyle >
          <ContainText><b>Q: {question_body}</b></ContainText>
        </QStyle>
        <Helpful>
          HELPFUL?
          <br/>
          <Yes onClick={(e) => {
            // e.stopPropagation();
            // handleHelpful(
            //   qHelpful,
            //   'questions',
            //   question_id,
            //   'helpful',
            //   setQHelpful,
            //   qRerender,
            //   setQRerender)
          }}> Yes <span>&#40;{question_helpfulness}&#41;</span>
          </Yes>
          <Report onClick={(e) => {
            e.stopPropagation();
            // handleReported(
            //   qReported,
            //   'questions',
            //   question_id,
            //   'report',
            //   setQReported)
            }}> {qReported ? 'Reported' : 'Report'}
          </Report>
          <br/>
          <AddAnswer onClick={(e) => {
            e.stopPropagation();
            setShow(true);
          }}>Add Answer</AddAnswer>
        </Helpful>
      </Container>
      {/* <AnswerModal
        key={question_id.toString()}
        id={id}
        productName={productName}
        question_id={question_id}
        question_body={question_body}
        onClose={(e) => {
          e.stopPropagation();
          setShow(false);
          getAnswers();
        }}
        show={show}
      /> */}
      {questionClicked && answers && !loading &&
        answers.length === 0 && (
          <NoAnswers>
            <b>No answers yet. Be the first to add an answer to this question!</b>
          </NoAnswers>
        )
      }
      {/* {loading && (
        <h4>Loading...</h4>
      )} */}
      {questionClicked && answers && (<div>nothing</div>
        // <AnswersBlock>
        //   {answers.length !== 0 && (
        //     <AStyle><b>A:</b></AStyle>
        //   )}
        //   <AnswerList>
        //     {answers.slice(0, answerCount).map((answer) => {
        //       // console.log(answer);
        //       return  (
        //         <AnswersList
        //           key={answer.answer_id}
        //           answer={answer}
        //           handleHelpful={handleHelpful}
        //           handleReported={handleReported}
        //           question_id={question_id}
        //           aRerender={aRerender}
        //           setARerender={setARerender}
        //         />
        //       )
        //     })}
        //   </AnswerList>
        // </AnswersBlock>
      )}
      {questionClicked && !loading && (
        answerCount < answers.length && (
          seeMoreAnswers
        ))
      }
      {questionClicked && (
        seeMoreClicked && (
          collapseAnswers
        )
      )}
    </Questions>
  )
}

export default QuestionList;




/*
import React from 'react';

const QuestionList = (props) => {
  if(true) {

    console.log('props = ', props);

    return (
        <div id="Results" style={{border: 'medium solid black', backgroundColor: "aliceblue", width: "98%", display: "block", margin: "auto"}}>

        </div>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }


};
export default QuestionList;


<form>
<h3>Q: {props.combos.questions}</h3>
<h3 style={{display: 'inline'}}>A: </h3>
<p style={{display: 'inline'}}>{props.combos.answers}</p>
</form>

{props.questions.slice(0, last).map((e, i) => {
            return (
              <form key={i}>
                <h3>Q: {e}</h3>
              </form>
            )
          })}

*/


/*
List Questions
GET /qa/questions Retrieves a list of questions for a particular product. This list does not include any reported questions.
____________________________________________________________________________________________
Parameter     |	     Type       | Description                                               |
--------------------------------------------------------------------------------------------|
product_id    |	integer	        | Specifies the product for which to retrieve questions.    |
page	        | integer	        | Selects the page of results to return. Default 1.         |
count	        | integer         |	Specifies how many results per page to return. Default 5. |
=============================================================================================

Response -> Status: 200 OK

{
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}


*/

/*
Answers List
Returns answers for a given question. This list does not include any reported answers.

GET /qa/questions/:question_id/answers

{
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/answer_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    // ...
  ]
}
*/