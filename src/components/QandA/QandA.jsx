import React from 'react';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

  }

  render () {
    return (
      <div>
        <h2>Welcome to Q and A</h2>
      </div>
    )
  }
};

export default QandA;