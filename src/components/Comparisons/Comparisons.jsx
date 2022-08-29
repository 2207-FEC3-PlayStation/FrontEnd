import React from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import styled from 'styled-components';
// import rightArrow from '../../assets/rightarrow.png';
// import leftArrow from '../../assets/leftarrow.png';

// this could might be a stateless component just for passing down props (main product being displayd) and organization purposes?

const Container = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  width: 957px;
  position: relative;
  color: black;
  scroll-behavior: smooth;
`

const LeftButton = styled.button`
  position: absolute;
  font-size: 25px;
  color: grey;
  height: 25px;
  width: 120px;
  top: 19%;
  left: 0%;
  border: none;
  padding-top: 17%;
  padding-bottom: 18.5%;
  background: transparent;
  background-image: linear-gradient(to left, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 60%);
`

const RightButton = styled(LeftButton)`
  background: transparent;
  background-image: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 60%);
  left: 88%;
`

class Comparisons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideR: false,
      clickedR: false,
      product: [
          {
            "id": 66642,
            "campus": "hr-rfc",
            "name": "Camo Onesie",
            "slogan": "Blend in to your crowd",
            "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
            "category": "Jackets",
            "default_price": "140.00",
            "created_at": "2022-03-31T21:13:15.875Z",
            "updated_at": "2022-03-31T21:13:15.875Z",
            "features": [
                {
                    "feature": "Fabric",
                    "value": "Canvas"
                },
                {
                    "feature": "Buttons",
                    "value": "Brass"
                }
            ],
            "style": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        }
        ,
        {
          "id": 66644,
          "campus": "hr-rfc",
          "name": "Morning Joggers",
          "slogan": "Make yourself a morning person",
          "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
          "category": "Pants",
          "default_price": "40.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z",
          "features": [
              {
                  "feature": "Fabric",
                  "value": "100% Cotton"
              },
              {
                  "feature": "Cut",
                  "value": "Skinny"
              }
          ],
          "style": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        },
        {
          "id": 66649,
          "campus": "hr-rfc",
          "name": "YEasy 350",
          "slogan": "Just jumped over jumpman",
          "description": "These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.",
          "category": "Kicks",
          "default_price": "450.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z",
          "features": [
              {
                  "feature": "Sole",
                  "value": "Rubber"
              },
              {
                  "feature": "Material",
                  "value": "FullControlSkin"
              },
              {
                  "feature": "Stitching",
                  "value": "Double Stitch"
              }
          ],
          "style": "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
      },
      {
        "id": 66648,
        "campus": "hr-rfc",
        "name": "Blues Suede Shoes",
        "slogan": "2019 Stanley Cup Limited Edition",
        "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
        "category": "Dress Shoes",
        "default_price": "120.00",
        "created_at": "2022-03-31T21:13:15.875Z",
        "updated_at": "2022-03-31T21:13:15.875Z",
        "features": [
            {
                "feature": "Sole",
                "value": "Rubber"
            },
            {
                "feature": "Material",
                "value": "FullControlSkin"
            },
            {
                "feature": "Stitching",
                "value": "Double Stitch"
            }
        ],
        "style": "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
    },
    {
      "id": 66646,
      "campus": "hr-rfc",
      "name": "Heir Force Ones",
      "slogan": "A sneaker dynasty",
      "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      "category": "Kicks",
      "default_price": "99.00",
      "created_at": "2022-03-31T21:13:15.875Z",
      "updated_at": "2022-03-31T21:13:15.875Z",
      "features": [
          {
              "feature": "Sole",
              "value": "Rubber"
          },
          {
              "feature": "Material",
              "value": "FullControlSkin"
          },
          {
              "feature": "Mid-Sole",
              "value": "ControlSupport Arch Bridge"
          },
          {
              "feature": "Stitching",
              "value": "Double Stitch"
          }
      ],
      "style": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
    ]
    };
  }

  // send a get request for related products
  // send a get request for styles of those related products

  scrollL () {
    console.log('clicked on left button')
    const element = document.getElementById("RelatedListCarousel");
    console.log('before', element.scrollLeft);
    element.scrollLeft -= 250;
    console.log('after', element.scrollLeft);
    this.setState({
      clickedR: false,
      hideR: false
    })
  }

  scrollR () {
    console.log('clicked on right button')
    const element = document.getElementById("RelatedListCarousel");
    if (element.scrollLeft === 0) {
      element.scrollLeft += 250;
      this.setState({
        clickedR: true,
        hideR: true
      })
    } else {
      this.setState({
        hideR: true
      })
    }
  }


  render (){
    let left, right;
    const element = document.getElementById("RelatedListCarousel");
    if (this.state.clickedR) {
      left = <LeftButton onClick={this.scrollL.bind(this)}>‹</LeftButton>
    }
    if (!this.state.hideR) {
      right = <RightButton onClick={this.scrollR.bind(this)}>›</RightButton>
    }
    return (
      <div>
        <Container>
          <p>Comparisons Section</p>
          <RelatedList id="RelatedList"product={this.state.product}/>
          {left}
          {right}
          <OutfitList product={this.state.product}/>
        </Container>
      </div>
    )
  }
}

export default Comparisons;