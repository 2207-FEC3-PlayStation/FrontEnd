import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';

class RandR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render (){
    return (
      <div>
        <RatingBreakdown style={{width: "33%"}}/>
      </div>
    )
  }
}

export default RandR;