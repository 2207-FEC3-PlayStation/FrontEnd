import React, { Component, useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';
import server from '../../serverRequests.js';

const QandA = ({prod}) => {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState(['Question_1', 'Question_2', 'Question_3', 'Question_4'])

<<<<<<< HEAD
class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      count: 4,
      questions: ['What is life?', 'When was was gum invented?', 'Why are there so many chickens?', 'Who are you?'],
      answers: ['Life is everything.', 'Gum was invented in 1923.', 'Because KFC is delicious!', 'I am no one.'],
      users: ['User1234', 'User2222', 'User4343', 'User0203'],
      seller: [false, true, false, false],
      date: ['Jan']
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this)
=======
  //axios
  const data = () => {
    return console.log('prod = ', prod)
>>>>>>> f6dfe051849cfda1a20799ff174867f36537abe6
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
