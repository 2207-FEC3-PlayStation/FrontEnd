import React from 'react';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import styled from 'styled-components';

// this could might be a stateless component just for passing down props (main product being displayd) and organization purposes?

const Container = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  border: 1px dotted purple;
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
`
const Related = styled.a`
  color: black;
  margin: 0 15px 20px 0;
  padding: 10px;
`

class Comparisons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
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
    }
    ]
    };
  }

  // send a get request for related products
  // send a get request for styles of those related products



  render (){
    return (
      <div>
        <Container>
          <p>Comparisons Section</p>
          <Related>
          <RelatedList product={this.state.product}/>
          </Related>
        <OutfitList product={this.state.product}/>
        </Container>
      </div>
    )
  }
}

export default Comparisons;