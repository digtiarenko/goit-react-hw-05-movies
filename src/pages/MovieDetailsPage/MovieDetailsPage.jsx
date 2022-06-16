import styles from './MovieDetailsPage.module.css';
import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../Services/fetchMethods';

function MovieDetailsPage() {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();
  console.log('movieId', movieId);
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetchMovieDetails(movieId).then(movieInfo => {
      console.log(movieInfo);
      setMovie(movieInfo);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={null}>
          <div>
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              width="250"
            />
          </div>

          <div className={null}>
            <h2 className={null}>
              {movie.title} ({movie.release_date})
            </h2>
            <p>vote average: {movie.vote_average}</p>
            <p className={null}>Overview:</p>
            <p className={null}>{movie.overview}</p>
          </div>
        </div>
      )}
      <h2>Additional information</h2>
      <NavLink className={styles.item} to="cast">
        Cast
      </NavLink>
      <NavLink className={styles.item} to="reviews">
        Reviews
      </NavLink>
      <Outlet />
    </>
  );
}

export { MovieDetailsPage };
