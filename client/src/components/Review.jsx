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
          <img src={this.props.review.userphoto}></img>
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
          <img src={this.props.review.userphoto}></img>
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

// import React from 'react';

// function Review({ review, handleReadMore }) {
//   var time = '';
//   var days = (Math.floor((Date.now() - review.review_date) / (24 * 60 * 60 * 1000)));
//   var months = (Math.floor(days / 30));

//   if (days > 30) {
//     if (months > 1) {
//       time = (Math.floor(days / 30)).toString() + ' months ago'
//     } else {
//       time = (Math.floor(days / 30)).toString() + ' month ago'
//     }
//   } else {
//     time = (Math.floor((Date.now() - review.review_date) / (24 * 60 * 60 * 1000))).toString() + ' days ago';
//   };

//   if (review.review.length > 140) {
//     var first = review.review.slice(0, 141);
//     var second = review.review.slice(141);
//     return (
//       <div className="review">
//         <div className="profile_photo">
//           <img src={review.userphoto}></img>
//         </div>
//         <div className="user">
//           {review.user}
//         </div>
//         <div className="date">
//           {time}
//         </div>
//         <div className="text">
//           <p>{first}<span id="dots">...</span><span id='more_text'>{second}</span><button id="read_more_btn" onClick={handleReadMore}>Read More</button></p>
//         </div>
//       </div>
//     )
//   } else {
//     return (
//       <div className="review">
//         <div className="profile_photo">
//           <img src={review.userphoto}></img>
//         </div>
//         <div className="user">
//           {review.user}
//         </div>
//         <div className="date">
//           {time}
//         </div>
//         <div className="text">
//           {review.review}
//         </div>
//       </div>
//     )
//   }
// }

// export default Review;
