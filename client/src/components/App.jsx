import React from 'react';
import Reviews from './Reviews.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    console.log(this.props.id)
    $.ajax({
      method: 'GET',
      url: '/api/listing/' + this.props.id + '/reviews',
      success: reviews => {
        console.log(reviews)
        this.setState({
          reviews: reviews
        })
        // console.log(this.state.reviews)
      }
    })
  }

  render() {
    return (
      <div>reviews section
        <Reviews />
      </div>
    );
  }
}

export default App;