import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Services/fetchMethods';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>AUTHOR: {review.author_details.username}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No reviews</h3>
      )}
    </div>
  );
}

export default Reviews;
