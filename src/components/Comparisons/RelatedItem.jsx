import React from 'react';
import styled from 'styled-components';
import starbutton from '../../assets/starbutton.png';


const Card = styled.div`
  border: 1px solid purple;
  color: black;
  font-size: 20px;
  margin: 0 15px 20px 0;
  padding: 10px;
`

const Button = styled.button`
  background: transparent url(${starbutton}) no-repeat top;
  height: 45px;
  width: 45px;
  border: none;
`


class RelatedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: ""

    }
  };

  handleClick () {
    console.log('hey')
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

        <img src={this.props.item.style}
          alt="header image"
        />
        <Button onClick={this.handleClick.bind(this)}></Button>
        <p>{this.props.item.category}</p>
        <p>{this.props.item.name}</p>
        <p>${this.props.item.default_price}</p>
        </Card>
      </div>

    )
  }
}

export default RelatedItem;
