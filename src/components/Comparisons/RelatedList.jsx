import React from 'react';
import ComparisonsModal from './ComparisonsModal.jsx'
import RelatedItem from './RelatedItem.jsx';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [
        66643,
        66644,
        66649,
        66648
    ],
      cardClicked: false
    };
  }

  //66643 seems to be out of stock... so will have to check if there are any in stock first because thumbnail and other properties are null

  // sends a get request for related products for the current product (props.product) when it's mounted (useEffect)
  // for now just dummy data

  render (){

    // use map function to render all products as a card
    return (
      <div>
          {this.state.relatedItems.map((item) => (
            <RelatedItem item={item} key={item}/>
          ))}
      </div>
    )
  }
}

export default RelatedList;
