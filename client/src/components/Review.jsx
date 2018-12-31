import React from 'react';

export default class Reviews extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      review: '',
      
    };
  }

  render() {
    return (
      <h1>Single Review</h1>
    );
  }
}