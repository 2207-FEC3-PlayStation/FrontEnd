import React from 'react';

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
      <div>
        <button>X</button>
        <p>Product Image</p>
        <p>Product Category</p>
        <p>Product Name</p>
        <p>Product Price</p>
      </div>
    )
  }
}

export default OutfitItem;
