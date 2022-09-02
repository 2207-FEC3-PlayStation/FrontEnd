import React, { Component, useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';
import server from '../../serverRequests.js';

function QandA ({prod}) {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(1);
  const [productID, setProductID] = useState('');
  const [results, setResults] = useState([]);
  const [questions, setQuestions] = useState([]);
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
    return console.log('results = ', results)
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

  useEffect(() => {
    if (prod) {
      server.get('/qa/questions', {'product_id': prod.id})
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          setResults(results => [...results, data.data.results[i]]);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [prod])


  const searchBar = (event) => {
    setSearch(event.target.value)
  }

  const loadMoreAnswers = () => {
    if (questions.length === count) {
      return console.log('No more answers!')
    }
    setCount(count + 1);
  }


  return (
    <div className="QandA">
      <div className="Search">
      <h2> {'QUESTIONS & ANSWERS'} (count = {count})</h2>
      <input
        className="search-bar"
        type="Text"
        onChange={data}
        placeholder="Have a question? Search for answers ..."
      />
      </div>
      <QuestionList count={count} results={results}/>
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
