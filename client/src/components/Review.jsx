import React from 'react';


function Review({review}) {
  console.log(review)
  return (
    <div>
      {review.id}
      {review.review}
      {review.user}
      {review.listing}
      {review.review_date}
    </div>
  )
}

export default Review;

