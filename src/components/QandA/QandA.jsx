import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuestionList from './QuestionList.jsx';
import QuestionModal from './Modals/QuestionModal.jsx';
import swal from 'sweetalert';
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
  color: white;
  background-color: #006FCD;
  &:hover {Arial, Helvetica,
    background: lightgrey;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
    transform: scale(1.05);
  }
`;

const Questions = styled.section`
  overflow: scroll;
  height: 100%;
  max-height: 85vh;
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0;
  border-bottom: 1px solid black ;
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
  height: 40px;
  width: 100%;
  &:focus {
    outline: none;
  }
  @media (max-width: 425px) {
    font-size: 10px
  }
`

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
  // ------------- product --------------------
  const [productID, setProductID] = useState('');
  const [productName, setProductName] = useState('');
  const [results, setResults] = useState('');
  const [showData, setShowData] = useState([
    /************************************
    * {
    *  questionID: '',
    *  questionHelp: '0',
    *  question: '',
    *  answers: [] (do not need this)
    * }
    *************************************/
  ]);
  const [showQModel, setShowQModel] = useState(false);
  const [qRerender, setQRerender] = useState(0);
  const [questionCount, setQuestionCount] = useState(4);
  const [questionID, setQuestionID] = useState('642440');

  // ==================================== PRODUCT_ID ====================================

  useEffect(() => {
    if (prod) {
      setProductID(prod.id);
      setProductName(prod.name);
    }
  }, [prod]);

  // ==================================== DATA ====================================

  useEffect(() => {
    if (productID) {
      server.get('/qa/questions', { 'product_id': productID , 'count': 1000})
        .then((product) => {
          setResults(product.data.results)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [productID, qRerender])

  useEffect(() => {
    if (results) {
      setShowData([]);
      for (let i = 0; i < results.length; i++) {
        setShowData(showData => [...showData, {
          questionID: results[i].question_id,
          questionHelp: results[i].question_helpfulness,
          question: results[i].question_body
        }])
      }
    }
  }, [results, showQModel, qRerender])

  // ==================================== Question Modal =============================
  if (showQModel) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  // ================================================================================

  const searchBar = (event) => {
    setSearch(event.target.value)
  }

  const moreAnsweredQuestions = () => {
    if (results.length === questionCount) {
      return console.log('No more questions!')
    }
    setQuestionCount(questionCount + 1);
  }

  const showMoreQuestions = (
    <Button onClick={moreAnsweredQuestions} key={'showMoreQs'}>
      <b>MORE ANSWERED QUESTIONS</b>
    </Button>
  )

  return (
    <React.Fragment>
      <h4 style={{marginLeft: '10px'}}> {'QUESTIONS & ANSWERS'}</h4>
      <Sort>
        <Search>
        <Icon src={MagGlass}/>
          <Input
            type="Text"
            value={search}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></Input>
        </Search>
        <br/>
        {showData.length > 0 ?
          <p></p> :
          <React.Fragment>
            <p>There are no questions for this product. Click "Add a Question" to add a question.</p>
            <Button onClick={() => setShowQModel(true)}>
              <b>ADD A QUESTION +</b>
            </Button>
          </React.Fragment>
        }
        <Questions>
        {showData.filter((question) => {
            if (search.length < 3) {
              return question;
            } else if (question.question.toLowerCase().includes(search.toLowerCase())) {
              return question;
            }
          }).slice(0, questionCount).map((question) => {
            return <QuestionList
                      key={question.questionID}
                      question={question}
                      id={productID}
                      productName={productName}
                      qRerender={qRerender}
                      setQRerender={setQRerender}
                    />
          })}
        </Questions>

         {search.length < 3 && (
          questionCount < showData.length) ?
            <p>Viewing {questionCount} of {showData.length} questions</p> : <p>Viewing {showData.length} of {showData.length} questions</p>
        }
        {questionCount < showData.length && [showMoreQuestions]}
        <QuestionModal
          key={productID}
          productID={productID}
          productName={productName}
          onClose={() => setShowQModel(false)}
          showQModel={showQModel}
        />
        {showData.length > 0 && (
          <Button onClick={() => setShowQModel(true)}>
            <b>ADD A QUESTION +</b>
          </Button>
        )}
      </Sort>
    </React.Fragment>
    )
}

export default QandA;