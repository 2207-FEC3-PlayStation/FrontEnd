import React from 'react';
import OutfitItem from './OutfitItem.jsx';
import styled from 'styled-components';
import plusbutton from '../../assets/plusbutton.png';

const Carousel = styled.div`
  align-items: left;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 957px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  scroll-behavior: smooth;
`

const Outfits = styled.div`
  margin-bottom: 4%;
`

const AddCard = styled.div`
  background-color: white;
  border: 1px solid gray;
  margin: 3%;
  position: relative;
  padding-bottom: 2%;
  margin-bottom: 15px;
  width: 180px;
  text-align: center;
  line-height: 250px;
`

const PlusButton = styled.button`
  background: transparent url(${plusbutton}) no-repeat top;
  height: 50px;
  width: 50px;
  border: none;
  position: absolute;
  top: 50%;
  right: 35%;
`

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitItems: [{
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
    }]
    };
  }
  // check session/cookie...

  // add to outfit method on click

  // delete function

  render (){
    // if outfitItems.length is 1 or more
    // conditionally render items using map

    return (
      <Outfits>
        <h4>YOUR OUTFIT</h4>
        <Carousel>
        {this.state.outfitItems.map((item) => (
          <OutfitItem item={item} key={item.id}/>
        ))}
        <AddCard>
          <h3>Add To Outfit</h3>
          <PlusButton></PlusButton>
        </AddCard>
        </Carousel>
      </Outfits>
    )
  }
}

export default OutfitList;