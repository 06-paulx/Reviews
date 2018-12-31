import React from 'react';
import $ from 'jquery';
import Row from './Row.jsx';
import Dummy from './../../dist/dummy.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Dummy,
      reviewChunks: []
    }
  }

  // componentDidMount() {
  //   getReviews()
  //   .done(data => {
  //     this.setState ({
  //       reviews: data      
  //     })
  //   })
  // }

  // getReviews() {
  //   return $.ajax({
  //     method: 'GET',
  //     url: '/api/listing/' + this.props.id + '/reviews'
  //   })
  // }

  componentDidMount() {
    fetch('/api/listing/' + this.props.id + '/reviews')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        reviews: data
      })
    })
  }

  render() {
    var reviews = this.state.reviews
    var reviewChunks = [[reviews[0], reviews[1]], [reviews[2], reviews[3]], [reviews[4], reviews[5]]]
    console.log(reviewChunks)
    return (
      <div>
        <h1>Reviews</h1>
        {
          reviewChunks.map((reviews) => 
            <Row reviews={reviews} />
          )
      }
      </div>
    );
  }
}

export default App;