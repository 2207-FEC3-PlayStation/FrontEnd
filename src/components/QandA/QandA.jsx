import React from 'react';
import QuestionList from './QuestionList.jsx';
import './QAstyles/QandA.css';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      count: 4,
      combos: {
        questions: ['What is life?', 'When was was gum invented?', 'Why are there so many chickens?', 'Who are you?'],
        answers: ['Life is everything.', 'Gum was invented in 1923.', 'Because KFC is delicious!', 'I am no one.'],
        users: ['User1234', 'User2222', 'User4343', 'User0203'],
        seller: [false, true, false, false],
        date: ['Jan']
      }
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this)
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  loadMoreAnswers(event) {
    event.preventDefault();
    this.setState({
      count: count + 1
    })
    console.log('You clicked!');
  }

  addQuestion(event) {
    event.preventDefault();

  }


  render() {
    return (
      <div className="QandA">
        <div className="Search">
        <h2> QUESTIONS & ANSWERS</h2>
        <input
          className="search-bar"
          type="Text"
          onChange={this.handleSearch}
          placeholder="Have a question? Search for answers ..."
        />
        </div>
        <QuestionList combos={this.state.combos} count={this.state.count}/><br></br>
        <button id="load" onClick={this.loadMoreAnswers}>
          <b>LOAD MORE ANSWERS</b></button><br></br>
        <button id="moreQA">
          <b>MORE ANSWERED QUESTIONS</b></button>
        <button id="addQ">
          <b>ADD A QUESTION +</b></button>
      </div>
    )
  }
}

export default QandA;
