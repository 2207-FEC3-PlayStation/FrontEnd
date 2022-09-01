import React, { Component, useState, useEffect } from 'react';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';
import server from '../../serverRequests.js';

function QandA ({prod}) {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState([]);

  const data = () => {
    //return console.log('questions = ', questions.results[0].question_body)
  }

  useEffect(() => {
    // console.log('useEffect -> prod -> questions');
    if (prod) {
      server.get('/qa/questions', {'product_id': prod.id})
      .then((data) => {
        setQuestions(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },[prod])

  const searchBar = (event) => {
    setSearch(event.target.value)
  }

  const loadMoreAnswers = () => {
    if (questions.length === count) {
      // return console.log('No more answers!')
    }
    setCount(count + 1);
  }


  return (
    <div className="QandA">
      <div className="Search">
      <h2> {"QUESTIONS & ANSWERS"} (count = {count})</h2>
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

/*

questions = {
  "product_id":"66646",
  "results":[{
    "question_id":642440,
    "question_body":"this is my question",
    "question_date":"2022-07-21T00:00:00.000Z",
    "asker_name":"joe",
    "question_helpfulness":9,
    "reported":false,
    "answers":{
      "5987083":{
        "id":5987083,
        "body":"waddapwaddapppp yeah joEY!",
        "date":"2022-07-22T00:00:00.000Z",
        "answerer_name":"kymegan",
        "helpfulness":5,
        "photos":[]
      }
    }
  },
  {
    "question_id":642458,
    "question_body":"Do these come in a size small enough for my kid Kevin Hart?",
    "question_date":"2022-07-22T00:00:00.000Z",
    "asker_name":"daRock",
    "question_helpfulness":3,
    "reported":false,
    "answers":{
      "5987057":{
        "id":5987057,
        "body":"Do not delete the answer, this is for the demo!!!!!!! Otherwise Im gonna sue you!!!!",
        "date":"2022-07-22T00:00:00.000Z",
        "answerer_name":"Saul goodman",
        "helpfulness":5,
        "photos":["http://res.cloudinary.com/dsfj56bcp/image/upload/v1658504684/project_atelier/sz1flmcjelqjrrhg6z6z.webp"]
      }
    }
  },
  {
    "question_id":642450,
    "question_body":"what?",
    "question_date":"2022-07-21T00:00:00.000Z",
    "asker_name":"jack",
    "question_helpfulness":1,
    "reported":false,
    "answers":{
      "5987058":{
        "id":5987058,
        "body":"Do not delete the answer!!!!!!",
        "date":"2022-07-22T00:00:00.000Z",
        "answerer_name":"Maverick(Tom)",
        "helpfulness":3,
        "photos":[]
      },
      "5987059":{
        "id":5987059,
        "body":"Do you like my new movie!!!!",
        "date":"2022-07-22T00:00:00.000Z",
        "answerer_name":"Maverick(Tom)",
        "helpfulness":5,
        "photos":["http://res.cloudinary.com/dsfj56bcp/image/upload/v1658504827/project_atelier/zihd6ssn2qpwu3lmdiee.webp"]
      }
    }
  }]
}
*/

