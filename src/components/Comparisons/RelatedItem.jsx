import React from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';


const Card = styled.div`
  border: 1px solid gray;
  color: black;
  font-size: 20px;
  margin: 0;
  padding: 0%;
  display:inline-block;
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
const Text = styled.p`
  padding: 5%;
  margin: 0;
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
      <div>
        <Card>
        <Button onClick={this.handleClick.bind(this)}></Button>
        <img src={this.props.item.style}
          alt="product image"
        /><br></br>
        <Text>{this.props.item.category}</Text>
        <Text>{this.props.item.name}</Text>
        <Text>${this.props.item.default_price}</Text>
        <Text>Average Star Rating</Text>
        </Card>
      </div>

    )
  }
}

export default RelatedItem;
