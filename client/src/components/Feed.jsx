import React from 'react';
import Review from './Review.jsx';

function Feed({show, reviews, handleReadMore, handleClose}) {
  const showHideClassName = show ? 'm-modal display-block' : 'm-modal display-none';

  return (
    <div className={showHideClassName}>
    <div className='m-feed-main'>
    <button className='m-close-button' onClick={handleClose}></button>
    <h1>{reviews.length} Reviews</h1>
      {reviews.map((review) =>
      <div className="m-feed-review">
        <Review review={review} handleReadMore={handleReadMore}/>
        <hr></hr>
      </div>
      )}
    </div>
    </div>
  )
}

export default Feed;