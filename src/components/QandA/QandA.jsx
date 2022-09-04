import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';
import server from '../../serverRequests.js';

function QandA ({prod}) {
  const [search, setSearch] = useState('');
  const [qCount, setQCount] = useState(1);
  const [aCount, setACount] = useState(1);
  const [productID, setProductID] = useState('');
  const [answersID, setAnswersID] = useState([]);
  const [results, setResults] = useState([]);
  const [questionID, setQuestionID] = useState('642440');
  const [questions, setQuestions] = useState([]);
  // ------------- get answers --------------------
  const [answers, setAnswers] = useState({
    answersBody: [],
    answersName: [],
    answersDate: [],
    answersHelp: [],
    answersPhoto: []
  })
  // ----------------------------------------------

  const [questionHelp, setQuestionHelp] = useState(0);
  const [reported, setReported] = useState(false);

  // test (console)
  const data = () => {
    return (
      // console.log('questions = ', questions)
      // console.log('questions = ', questions)
      console.log('body = ', answers.answersBody[0]),
      console.log('name = ', answers.answersName[0]),
      console.log('date = ', answers.answersDate[0]),
      console.log('help = ', answers.answersHelp[0]),
      console.log('photo = ', answers.answersPhoto[0])
      )
  }

  // ==================================== PRODUCT_ID ====================================

  useEffect(() => {
    if (prod) {
      setProductID(prod.id);
    }
  }, [prod]);

  // ==================================== QUESTIONS ====================================

  useEffect(() => {
    if (productID) {
      server.get('/qa/questions', {'product_id': productID})
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          setResults(results => [...results, data.data.results[i]])
          setQuestions(questions => [...questions, data.data.results[i].question_body])
          for (const key in data.data.results[i].answers) {
          setAnswersID(answersID => [...answersID, `${key}`])
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [productID])

  // ==================================== ANSWERS ====================================

  useEffect(() => {
    if (productID) {
      server.get('/qa/answers', {'question_id': questionID})
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {

          console.log('data = ', data.data.results[i].body)
          var date = data.data.results[i].date
          date = date.slice(0, 10)

          setAnswers({
            ...answers,
            answersBody: [
              ...answers.answersBody,
               data.data.results[i].body] })
          setAnswers({ ...answers, answersName: data.data.results[i].answerer_name})
          setAnswers({ ...answers, answersData: date})
          setAnswers({ ...answers, answersHelp: data.data.results[i].helpfulness})
          setAnswers({ ...answers, answersPhoto: data.data.results[i].photos})
        }
      })
    }
  }, [productID])

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
      <QuestionList
        aCount={aCount} qCount={qCount} questions={questions} answers={answers}/>
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
