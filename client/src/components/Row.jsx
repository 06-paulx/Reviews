import React from 'react';
import Review from './Review.jsx';

function Row({reviews, handleReadMore}) {
  return (
    <div className="row">
      {
        reviews.map((review) => 
          <Review 
            review={review} 
            handleReadMore={handleReadMore}
          />
        )
      }
    </div>
  )
}

export default Row;
