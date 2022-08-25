import React from 'react';
import RelatedList from './Related.jsx';
import OutfitList from '/OutfitList';

// this could might be a stateless component just for passing down props (main product being displayd) and organization purposes?

class Comparisons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render (){
    return (
      <div>
        <RelatedList/>
        <OutfitList/>
      </div>
    )
  }
}

export default Comparisons;