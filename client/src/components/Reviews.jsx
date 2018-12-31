import React from 'react';
import Review from './Review.jsx';

export default class Reviews extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Review />
      </div>
    );
  }
}