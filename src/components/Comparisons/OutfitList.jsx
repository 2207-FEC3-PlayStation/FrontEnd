import React from 'react';
import OutfitItem from './OutfitItem.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitItems: [],
    };
  }
  // check session/cookie...

  // add to outfit method on click

  // delete function

  render (){
    // if outfitItems.length is 1 or more
    // conditionally render items using map

    return (
      <div>
        <button>Add to Outfit</button>
        <OutfitItem/>
      </div>
    )
  }
}

export default OutfitList;