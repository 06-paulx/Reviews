import React from 'react';
import Review from './Review.jsx';

function Row({reviews}) {
  return (
    <div>
      {
        reviews.map((review) => 
          <Review review={review}/>
        )
      }
    </div>
  )
}

export default Row;
