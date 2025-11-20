import React from 'react'

const Reviews = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`, {
    cache: "no-store",
  });

  const reviews = await res.json();

  return (
    <div>
      Reviews: {reviews.length}
    </div>
  );
};

export default Reviews;
