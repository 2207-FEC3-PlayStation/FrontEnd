import React from 'react';

const QuestionList = props => {
  console.log('props = ', props)
  return (
    <div id="Results" style={{border: 'medium solid black', backgroundColor: "aliceblue", width: "50%"}}>
       <form>
          <h3>Q: {props.questions[0]}</h3>
          <h3 style={{display: 'inline'}}>A: </h3>
          <p style={{display: 'inline'}}>{props.answers[0]}</p>
        </form>
        <form>
          <h3>Q: {props.questions[1]}</h3>
          <h3 style={{display: 'inline'}}>A: </h3>
          <p style={{display: 'inline'}}>{props.answers[1]}</p>
        </form>
        <form>
          <h3>Q: {props.questions[2]}</h3>
          <h3 style={{display: 'inline'}}>A: </h3>
          <p style={{display: 'inline'}}>{props.answers[2]}</p>
        </form>
        <form>
          <h3>Q: {props.questions[3]}</h3>
          <h3 style={{display: 'inline'}}>A: </h3>
          <p style={{display: 'inline'}}>{props.answers[3]}</p>
        </form>

    </div>
    );
  };
export default QuestionList;
