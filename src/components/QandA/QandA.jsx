import React, { Component, useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';
import server from '../../serverRequests.js';

const QandA = ({prod}) => {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState(['Question_1', 'Question_2', 'Question_3', 'Question_4'])

  //axios
  const data = () => {
    return console.log('prod = ', prod)
  }

  useEffect(() => {
    if (prod) {
      server.get('/qa/questions', {'product_id': prod.id})
      .then((data) => {
        setQuestions(data.data);
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
      <h2> QUESTIONS & ANSWERS (count = {count})</h2>
      <input
        className="search-bar"
        type="Text"
        onChange={data}
        placeholder="Have a question? Search for answers ..."
      />
      </div>
      <QuestionList count={count} questions={questions}/>
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
