import React from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';
import ComparisonsModal from './ComparisonsModal.jsx';

const Card = styled.div`
  border: 1px solid gray;
  color: black;
  font-size: 20px;
  margin: 3%;
  margin-bottom: 0;
  position: relative;
  padding-bottom: 2%;
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
const Text = styled.small`
  color: rgb(57, 57, 57);
  padding: 5%;
`
const Img = styled.img`
  width:180px;
  height:220px;
  opacity: 0.4;
`
class RelatedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "",
      starClick: false
    }
  };

  showModal () {
    console.log('Clicked Star Button');
    // open comparison modal
    this.setState({
      starClick: true
    })
  }

  hideModal () {
    console.log('close')
    this.setState({
      starClick: false
    })
  }

  // get request to get related Item info and set that to this.state.relatedItemInfo

  // get request to styles to get all the images
  // for now just use the first style for this.state.style

  // clicking the card will navigate to the product detail page

  // sale prices should be in red with original crossed out

  // star rating. if no reviews - should be hidden.

  // future enhancement - on hover, load other style images in a scrollable carousel. Clicking on a thumbnail should change the preview image to display the image clicked. The selection of a different image should persist even after no longer hovering over this card. Clicking on the preview image, and anywhere on the card other than a thumbnail image carousel, will continue to navigate the user to that product’s detail page.

  render (){
    return (
        <Card>
          <ComparisonsModal show={this.state.starClick} handleClose={this.hideModal.bind(this)} close={this.props.close}>
          </ComparisonsModal>
          <Img src={this.props.item.style} alt="product image"/><br></br>
          <Button onClick={this.showModal.bind(this)}></Button>
          <Text>{this.props.item.category.toUpperCase()}</Text>
          <br></br>
          <Text>{this.props.item.name}</Text><br></br>
          <Text>${this.props.item.default_price}</Text><br></br>
          <Text>Average Star Rating</Text>
        </Card>
    )
  }
}

export default RelatedItem;
