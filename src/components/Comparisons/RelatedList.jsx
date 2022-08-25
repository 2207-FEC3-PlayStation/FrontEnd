import React from 'react';
import ComparisonsModal from './ComparisonsModal.jsx'
import RelatedItem from './RelatedItem.jsx';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      cardClicked: false
    };
  }

  // sends a get request for related products for the current product when it's mounted

  render (){
    // conditionally render comparisons modal if clicked
    // let modal;
    // if clicked
    // modal = </ComparisonsModal> ?

    // use map function to render all products as a card
    return (
      <div>
        <RelatedItem/>
      </div>
    )
  }
}

export default RelatedList;
