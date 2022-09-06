import React from 'react';

const QuestionList = (props) => {
  if(true) {

    console.log('props = ', props);

    return (
        <div id="Results" style={{border: 'medium solid black', backgroundColor: "aliceblue", width: "98%", display: "block", margin: "auto"}}>

        </div>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }


};
export default QuestionList;

/*
<form>
<h3>Q: {props.combos.questions}</h3>
<h3 style={{display: 'inline'}}>A: </h3>
<p style={{display: 'inline'}}>{props.combos.answers}</p>
</form>

{props.questions.slice(0, last).map((e, i) => {
            return (
              <form key={i}>
                <h3>Q: {e}</h3>
              </form>
            )
          })}

*/


/*
List Questions
GET /qa/questions Retrieves a list of questions for a particular product. This list does not include any reported questions.
____________________________________________________________________________________________
Parameter     |	     Type       | Description                                               |
--------------------------------------------------------------------------------------------|
product_id    |	integer	        | Specifies the product for which to retrieve questions.    |
page	        | integer	        | Selects the page of results to return. Default 1.         |
count	        | integer         |	Specifies how many results per page to return. Default 5. |
=============================================================================================

Response -> Status: 200 OK

{
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}


*/

/*
Answers List
Returns answers for a given question. This list does not include any reported answers.

GET /qa/questions/:question_id/answers

{
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/answer_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    // ...
  ]
}
*/