import React from 'react';

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true
    }
  }
  
  handleReadMore() {
    this.setState ({
      expanded: true
    })
  }

  componentDidMount() {
    if (this.props.review.review.length > 140) {
      this.setState({
        expanded: false
      })
    }
  }
  
  
  render () {
    this.time = '';
    this.days = (Math.floor((Date.now() - this.props.review.review_date) / (24 * 60 * 60 * 1000)));
    this.months = (Math.floor(this.days / 30));

    if (this.days > 30) {
      if (this.months > 1) {
        this.time = (Math.floor(this.days / 30)).toString() + ' months ago'
      } else {
        this.time = (Math.floor(this.days / 30)).toString() + ' month ago'
      }
    } else {
      this.time = (Math.floor((Date.now() - this.props.review.review_date) / (24 * 60 * 60 * 1000))).toString() + ' days ago';
    };

    if (this.props.review.review.length > 140) {
      this.first = this.props.review.review.slice(0, 141);
      this.second = this.props.review.review.slice(141);
    };

    let expanded = this.state.expanded;
    let view;

    if (expanded) {
      view = <div className="review">
        <div className="profile_photo">
          <img src={this.props.review.userphoto} id="user-photo"></img>
        </div>
        <div className="user">
          {this.props.review.user}
        </div>
        <div className="date">
          {this.time}
        </div>
        <div className="text">
          {this.props.review.review}
        </div>
      </div>
    } else {
      view = <div className="review">
        <div className="profile_photo">
          <img src={this.props.review.userphoto} id="user-photo"></img>
        </div>
        <div className="user">
          {this.props.review.user}
        </div>
        <div className="date">
          {this.time}
        </div>
        <div className="text">
          <p>{this.first}<span id="dots">...</span><span id='more_text'>{this.second}</span><button id="read_more_btn" onClick={this.handleReadMore.bind(this)}>Read More</button></p>
        </div>
      </div>
    }

    return (
      <div>
        {view}
      </div>
    )
  }
};

export default Review;
