import React from 'react';
import QuestionList from './QuestionList.jsx';

//test?
class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      combos: {
        questions: ['What is life?', 'When was was gum invented?', 'Why are there so many chickens?', 'Who are you?'],
        answers: ['Life is everything.', 'Gum was invented in 1923.', 'Because KFC is delicious!', 'A am no one.']
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
    console.log('You clicked!');
  }

  addQuestion(event) {
    event.preventDefault();

  }


  render() {
    return (
      <div className="QandA">
        <div id="Search" style={{border: 'medium solid black', backgroundColor: "aqua", width: "50%"}}>
        <h2>QUESTIONS & ANSWERS</h2>
        <input
          type="Text"
          onChange={this.handleSearch}
          placeholder="Have a question? Search for answers ..."
          style={{width: "98%", display: "block", margin: "auto"}}
        />
        </div>
        <QuestionList {...this.state.combos}/><br></br>
        <button onClick={this.loadMoreAnswers} style ={{border: 'none', background: 'none'}}>
          <b>LOAD MORE ANSWERS</b></button><br></br>

        <button style={{margin: '10px', backgroundColor: "white", width: "230px", height: "50px"}}>
          <b>MORE ANSWERED QUESTIONS</b></button>

        <button style={{margin: '10px', backgroundColor: "white", width: "150px", height: "50px"}}>
          <b>ADD A QUESTION +</b></button>

      </div>
    )
  }
}

export default QandA;