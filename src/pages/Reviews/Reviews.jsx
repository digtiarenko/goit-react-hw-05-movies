import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../Services/fetchMethods';

export function Reviews() {
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
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      ) : (
        <h3>No reviews</h3>
      )}
    </div>
  );
}
