import React from 'react';

class RelatedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItem: {},
      starClicked: false
    };
  }


  // on click of star button render the comparison modal

  render (){

    return (
      <div>
      <button>Star</button>
        <p>Product Image<p>
        <p>Product Category</p>
        <p>Product Name</p>
        <p>Product Price</p>
      </div>
    )
  }
}

export default RelatedItem;
