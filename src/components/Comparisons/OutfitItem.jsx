import React from 'react';
import styled from 'styled-components';
import xbutton from '../../assets/xbutton.png';

const Card = styled.div`
  border: 1px solid gray;
  color: black;
  font-size: 20px;
  margin: 3%;
  position: relative;
  padding-bottom: 2%;
  margin-bottom: 15px;
`
const Text = styled.small`
  color: rgb(57, 57, 57);
  padding: 5%;
`

const Img = styled.img`
  width:180px;
  height:220px;
  opacity: 0.4;
`
const Button = styled.button`
  background: transparent url(${xbutton}) no-repeat top;
  height: 25px;
  width: 25px;
  border: none;
  position: absolute;
  top: 2%;
  right: 5%;
`

class OutfitItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitItem: {},
      deleteClicked: false
    }
  }


  // on click of delete button, call the handleDelete function from OutfitList

  render (){
    return (
        <Card>
        <Button></Button>
        <Img src={this.props.item.style}></Img><br></br>
        <Text>{this.props.item.category.toUpperCase()}</Text><br></br>
        <Text>{this.props.item.name}</Text><br></br>
        <Text>{this.props.item.default_price}</Text><br></br>
        <Text>Average Star Rating</Text>
        </Card>
    )
  }
}

export default OutfitItem;
