import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx';
import Reviews from './Reviews.jsx';

class RandR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render (){
    return (
      <div>
        <RatingBreakdown reviews={this.props.reviews}/>
        <Reviews/>
      </div>
    )
  }
}

export default RandR;