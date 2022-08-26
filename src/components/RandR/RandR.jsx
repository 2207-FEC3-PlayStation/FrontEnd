import React from 'react';
import RatingBreakdown from './RatingBreakdown/RatingBreakdown.jsx';
import Reviews from './Reviews/Reviews.jsx';

class RandR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render (){
    return (
      <div>
        <RatingBreakdown />
        <Reviews />
      </div>
    )
  }
}

export default RandR;