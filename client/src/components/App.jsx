import React from 'react';
import $ from 'jquery';
import Row from './Row.jsx';
import Dummy from '../../../public/dist/dummy.js'
import { domainToASCII } from 'url';
import Feed from './Feed.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: Dummy,
      showFeed: false
    }
  }

  handleReadMore() {
    var dots = document.getElementById('dots');
    var more = document.getElementById('more_text');
    var button = document.getElementById('read_more_btn');

    dots.style.display = "none";
    button.style.display = "none";
    more.style.display = "inline";
  }

  handleClick() {
    this.setState({
      showFeed: true
    })
  }

  handleClose() {
    this.setState({
      showFeed: false
    })
  }

  componentDidMount() {
    fetch('http://localhost:4001/' + this.props.id + '/reviews')
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
    console.log(reviews.length)
    return (
      <div className="m-review_container">
        <h1>Reviews</h1>
        {
          reviewChunks.map((reviews) => 
            <Row 
              reviews={reviews} 
              handleReadMore={this.handleReadMore.bind(this)}
            />
          ) 
        }
        <button id="read_all" onClick={this.handleClick.bind(this)}>Read all {reviews.length} reviews</button>
        <Feed 
          show={this.state.showFeed}
          reviews={this.state.reviews}
          handleReadMore={this.handleReadMore.bind(this)}
          handleClose={this.handleClose.bind(this)}
          />
      </div>
    );
  }
}

export default App;