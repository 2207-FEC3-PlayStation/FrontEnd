import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import server from '../../serverRequests.js';
import styled from 'styled-components';
import AnswersList from './AnswerList.jsx';
import AnswerModal from './Modals/AnswerModal.jsx';
import swal from 'sweetalert';

const Questions = styled.div`
  min-width: 80%;
  transition: background-color 0.35s ease-out 0s;
  -webkit-transition: background-color .35s ease-out;
  -moz-transition: background-color .35s ease-out;
  -o-transition: background-color .35s ease-out;
  transition: background-color .35s ease-out;
  cursor: ns-resize;
  &:hover {
    background-color: #f0f8ff;
    border: 1px solid #6495ed;
    // transform: scale(1.03);
  }
  @media {
    width: 15vw;
  }
`;

const QStyle = styled.div`
  font-size: 1em;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const AnswersBlock = styled.div`

`

const AStyle = styled.div`
  font-size: 1em;
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
`

const Button = styled.button`
  background: none;
  border: none;
  margin: 0 0 1em 1em;
  padding: 0.5em 1em;
  display: block;
  &:hover {
    transform: scale(1.05);
  }
`;

const Helpful = styled.div`
  text-align: center;
  font-size: 12px;
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
  const [answers, setAnswers] = useState(null);
  const [reload, setReload] = useState(true);
  const [answerCount, setAnswerCount] = useState(2);
  const [questionClicked, setQuestionClicked] = useState(false);
  const [seeMoreClicked, setSeeMoreClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [qHelpful, setQHelpful] = useState(false);
  const [aRerender, setARerender] = useState(0);
  const [qReported, setQReported] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    server.get('/qa/answers', { 'question_id': question.questionID , 'count': 1000})
      .then(response => {
        setAnswers(response.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Unable to get answers. Sorry...', err);
      })
  }, [question.questionID, id, reload]);

  const handleShowingAnswers = () => {
    if (questionClicked) {
      setQuestionClicked(!questionClicked);
    } else {
      // getAnswers();
      setQuestionClicked(!questionClicked);
    }
  }

  const handleHelpful = (stateVariable, qOrA, id, helpful, setStateVariable, rerender, setRerender) => {
    if( qOrA === 'questions') {
      var x = {'question_id': id};
    } else {
      var  x = {'answer_id': id};
    }
    if (stateVariable) {
      swal("Helpful?", "You can only click 'Yes' once.", "error");
    } else {
      server.put(`/qa/${qOrA}/helpful`, x)
        .then(response => {
          swal("Thank You", 'Your feedback has been noted.', "success")
          return setStateVariable(true)
        })
        .catch(err => console.error(err))
        .then(() => {
          setRerender(rerender + 1),
          console.log(rerender)
        })
    }
  }

  const handleReported = (stateVariable, qOrA, id, report, setStateVariable) => {
    if (stateVariable) {
      swal("Helpful?", "We only allow fone click of 'Reported'. We will review this as soon as possible.", "error");
    } else {
      server.put('/qa/answers/report', { 'answer_id': id })
        .then(() => {
          setStateVariable(true);
          swal("Thank You", 'We have marked this answer as "Reported" and will be reviewed soon.Your report has been noted', "success");
        })
        .catch(err => {
          swal('Yikes...', 'There was an error on our side. Try again later.', 'error');
        })
    }
  }

  const seeMoreAnswers = (
    <Button onClick={() => {
      setAnswerCount(answerCount + answers.length - 2)
      setSeeMoreClicked(!seeMoreClicked);
      }}>
      <b>SEE MORE ANSWERS</b>
    </Button>
  )
  const hideAnswers = (
    <Button onClick={() => {
      handleShowingAnswers(false);
      setLoading(false);
      setAnswerCount(2);
      setSeeMoreClicked(!seeMoreClicked);
    }}>
      <b>COLLAPSE ANSWERS</b>
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
          <ContainText><b>Q: {question.question}</b></ContainText>
        </QStyle>
        <Helpful>
          Helpful?
          <Yes onClick={(e) => {
            //e.stopPropagation();
            handleHelpful(
              qHelpful,
              'questions',
              question.questionID,
              'helpful',
              setQHelpful,
              qRerender,
              setQRerender)
          }}> <u>Yes</u> <span>({question.questionHelp})&emsp;|</span>
          </Yes>
          <AddAnswer onClick={(e) => {
            //e.stopPropagation();
            setShow(true);
          }}>Add Answer</AddAnswer>
        </Helpful>
      </Container>
      <AnswerModal
        key={question.questionID}
        id={id}
        productName={productName}
        question_id={question.questionID}
        question_body={question.question}
        onClose={(e) => {
          //e.stopPropagation();
          setShow(false);
          setReload(!reload);
        }}
        show={show}
      />
      {answers && !loading &&
        answers.length === 0 && (
          <NoAnswers>
            <b>No answers yet. Be the first to add an answer to this question!</b>
          </NoAnswers>
        )
      }
      {answers && (
        <AnswersBlock>
          {answers.length !== 0 && (
            <AStyle><b>A:</b></AStyle>
          )}
          <AnswerList>
            {answers.slice(0, answerCount).map((answer) => {
              return  (
                <AnswersList
                  key={answer.answer_id}
                  answer={answer}
                  handleHelpful={handleHelpful}
                  handleReported={handleReported}
                  question_id={question.questionID}
                  aRerender={aRerender}
                  setARerender={setARerender}
                />
              )
            })}
          </AnswerList>
        </AnswersBlock>
      )}
      {answers && !loading && (
        answerCount < answers.length && (
          seeMoreAnswers
        ))
      }
      {seeMoreClicked && (
          hideAnswers
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