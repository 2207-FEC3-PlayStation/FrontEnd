import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';
import MagGlass from "./searchicon.png"
import server from '../../serverRequests.js';

//------------------------ styled-components ------------------------//
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid grey;
  margin-right: 1em;
  padding: 0.5em 1em;
  &:hover {
    background: lightgrey;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
    transform: scale(1.05);
  }
`;

const Questions = styled.section`
  overflow: auto;
  height: 100%;
  max-height: 85vh;
  width: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Sort = styled.div`
  padding: 1em;
  margin: 0 auto;
`;

const Search = styled.div`
  display: flex;
  line-height: 24px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 5px;
  vertical-align: middle;
  width: 60%;
  @media (max-width: 425px) {
    width: 90%;
  }
`;

const Input = styled.input`
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  text-align: middle;
  border: 1px solid grey;
  height: 40px;
  width: 100%;
  &:focus {
    outline: none;
  }
  @media (max-width: 425px) {
    font-size: 10px
  }
`;

const Icon = styled.img`
  position: absolute;
  right: 40%;
  width: 25px;
  height: 25px;
  margin: 10px;
`;
//-------------------------------------------------------------------//

function QandA({ prod }) {

  const [search, setSearch] = useState('');
  const [count, setCount] = useState({ questions: 1, answers: 1 });

  // ------------- product --------------------
  const [productID, setProductID] = useState('');
  const [results, setResults] = useState('');
  const [showData, setShowData] = useState([
    // {questionID: '', question: '', answers: []}
  ]);
  const [questionCount, setQuestionCount] = useState(1);
  const [questionID, setQuestionID] = useState('642440');
  // ------------- get answers --------------------
  const [answers, setAnswers] = useState([])
  // ----------------------------------------------

  // test (console)
  // const data = () => {
  //   return (
  //     // console.log('')
  //     console.log('showData = ', showData)
  //   )
  // }

  // ==================================== PRODUCT_ID ====================================

  useEffect(() => {
    if (prod) {
      setProductID(prod.id);
    }
  }, [prod]);

  // ==================================== DATA ====================================

  useEffect(() => {
    if (productID) {
      server.get('/qa/questions', { 'product_id': productID })
        .then((product) => {
          setResults(product.data.results)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [productID])

  useEffect(() => {
    // console.log('UseEffect (data)')
    // console.log('results = ', results)
    if (results) {
      for (let i = 0; i < results.length; i++) {
        setShowData(showData => [...showData, {
          questionID: results[i].question_id,
          question: results[i].question_body,
          answers: Object.values(results[i].answers)
        }])
      }
    }
  }, [results])

  // ==================================== ANSWERS ====================================

  // useEffect(() => {
  //   if (productID) {
  //     server.get('/qa/answers', { 'question_id': questionID })
  //       .then((answersResponse) => {
  //         console.log('===ANSWERS===')
  //   })
  // }, [productID])

  // =================================================================================

  const searchBar = (event) => {
    setSearch(event.target.value)
  }

  const loadMoreAnswers = () => {
    // console.log('count = ', count);
    // console.log('results = ', results);
    // console.log('showData = ', showData);
    // get max answers number
    var max;
    var arr = [];
    var len = [];
    for (let i = 0; i < results.length; i++) {
      arr.push(Object.values(results[i].answers))
    }
    for (let i = 0; i < arr.length; i++) {
      len.push(arr[i].length)
    }
    max = Math.max(...len);

    if (max === count.answers) {
      return console.log('No more answers!')
    }
    setCount(count => ({ ...count, answers: count.answers + 1 }));
    // console.log('results = ', results);
    // console.log('count = ', count);
    // console.log('showData = ', showData);
  }

  const moreAnsweredQuestions = () => {
    // console.log('results = ', results)
    // console.log('showData = ', showData)
    if (results.length === questionCount) {
      return console.log('No more questions!')
    }
    setQuestionCount(questionCount + 1);
  }


  if (0 === 0) {
    return (
    <>
      <h2> {'QUESTIONS & ANSWERS'}</h2>
      <Sort>
        <Search>
          <Input
            src={MagGlass}
            type="Text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            value={search}>
          </Input>
          <Icon src={MagGlass}/>
        </Search>
        <Questions>
        {showData.filter((question) => {
            if (search.length < 3) {
              return question;
            } else if (question.question.toLowerCase().includes(search.toLowerCase())) {
              return question;
            }
          }).slice(0, questionCount).map((question, index) => {
            return (
              <div key={index}>
                <h3>Q: {question.question}</h3>
                  {question.answers.map((answer, index) => {
                    return (
                      <div key={index}>
                        <h3 style={{display: 'inline'}}>A: </h3>
                        <p style={{display: 'inline'}}>{answer.body}</p>
                        <pre>   by {answer.answerer_name}, {answer.date.slice(0, 10)}   |   Helpful? <u>Yes</u>({answer.helpfulness})   |   <u>Report</u></pre>
                      </div>
                    )
                  })}
              </div>
            )
          })}

        </Questions><br></br>

        <button id="load" onClick={loadMoreAnswers}>
          <b>LOAD MORE ANSWERS</b></button><br></br><br></br>
        <Button onClick={moreAnsweredQuestions}>
          <b>MORE ANSWERED QUESTIONS</b>
        </Button>
        <Button>
          <b>ADD A QUESTION +</b>
        </Button>
      </Sort>
    </>
    )
  }


};

export default QandA;


/*
{showData.map((question, index) => {
          return (
            <div key={index}>
              <h3>Q: {question.question}</h3>
                {question.answers.map((answer, index) => {
                  return (
                    <div key={index}>
                      <h3 style={{display: 'inline'}}>A: </h3>
                      <p style={{display: 'inline'}}>{answer.body}</p>
                      <pre>   by {answer.answerer_name}, {answer.date.slice(0, 10)}   |   Helpful? <u>Yes</u>({answer.helpfulness})   |   <u>Report</u></pre>
                    </div>
                  )
                })}
            </div>
          )
        })}
*/