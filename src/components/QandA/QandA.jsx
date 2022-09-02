import React, { Component, useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';
import server from '../../serverRequests.js';

function QandA ({prod}) {
  const [search, setSearch] = useState('');
  const [qCount, setQCount] = useState(2);
  const [aCount, setACount] = useState(1);
  const [productID, setProductID] = useState('');
  const [answersID, setAnswersID] = useState([]);
  const [results, setResults] = useState([]);
  const [questionID, setQuestionID] = useState('642440');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionHelp, setQuestionHelp] = useState(0);
  const [reported, setReported] = useState(false);
  const [questionAnswer, setQuestionAnswer] = useState({
    id: '',
    body: '',
    date: '',
    answerName: '',
    helpfulness: '',
    photos: []
  })

  // test (console)
  const data = () => {
    return console.log('answers = ', answers)
  }

  useEffect(() => {
    if (prod) {
      server.get('/qa/questions', {'product_id': prod.id})
      .then((data) => {
        setProductID(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [prod])

  // ==================================== QUESTIONS ====================================

  useEffect(() => {
    if (prod) {
      server.get('/qa/questions', {'product_id': prod.id})
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          setResults(results => [...results, data.data.results[i]]);
          for (const key in data.data.results[i].answers) {
          setAnswersID(answersID => [...answersID, `${key}`])
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [prod])


  // ==================================== ANSWERS ====================================

  useEffect(() => {
    //console.log('useEffect-answers')
    if (prod) {
      server.get('/qa/questions', {'product_id': questionID})
      .then((data) => {
        //console.log('...results', data.data)
        for (let i = 0; i < data.data.results.length; i++) {
          setAnswers(answers => [...answers, data.data.results[i].body]);
          // for (const key in data.data.results[i].answers) {
          // setAnswersID(answersID => [...answersID, `${key}`])
          // }
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [prod])

  // =================================================================================

  const searchBar = (event) => {
    setSearch(event.target.value)
  }

  const loadMoreAnswers = () => {
    if (results.length === qCount) {
      return console.log('No more answers!')
    }
    setQCount(qCount + 1);
  }


  return (
    <div className="QandA">
      <div className="Search">
        <h2> {'QUESTIONS & ANSWERS'}</h2>
          <input
            className="search-bar"
            type="Text"
            onChange={data}
            placeholder="Have a question? Search for answers ..."
          />
      </div>
      <QuestionList aCount={aCount} qCount={qCount} results={results} answersID={answersID}/>
      <br></br>
      <button id="load" onClick={loadMoreAnswers}>
      <b>LOAD MORE ANSWERS</b></button><br></br>
      <button id="moreQA">
      <b>MORE ANSWERED QUESTIONS</b></button>
      <button id="addQ">
      <b>ADD A QUESTION +</b></button>
    </div>
  )
};

export default QandA;
