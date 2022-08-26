import React from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';

const CarouselItem= styled.div`
display: flex;
transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
`

const Card = styled.div`
  border: 1px solid gray;
  color: black;
  font-size: 20px;
  margin: 3%;
  padding: 0;
  display: inline-block;
  position: relative;
`

const Button = styled.button`
  background: transparent url(${starbutton}) no-repeat top;
  height: 25px;
  width: 25px;
  border: none;
  position: absolute;
  top: 2%;
  right: 5%;
`
const Text = styled.span`
  color: rgb(57, 57, 57);
  padding: 5%;
`

const Img = styled.img`
  width:100%;
  height:70%;
  opacity: 0.4;
`

class RelatedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: ""

    }
  };

  handleClick () {
    console.log('Clicked Star Button')
    // open comparison modal
  }


  // get request to get related Item info and set that to this.state.relatedItemInfo

  // get request to styles to get all the images
  // for now just use the first style for this.state.style


  // on click of star button render the comparison modal

  render (){
    return (
      // <div>
      <CarouselItem>
        <Card>
        <Button onClick={this.handleClick.bind(this)}></Button>
        <Img src={this.props.item.style} alt="product image"/><br></br>
        <Text>{this.props.item.category.toUpperCase()}</Text>
        <br></br>
        <Text>{this.props.item.name}</Text><br></br>
        <Text>${this.props.item.default_price}</Text><br></br>
        <Text>Average Star Rating</Text>
        </Card>
      </CarouselItem>
      // </div>

    )
  }
}

export default RelatedItem;
