import styles from './MovieDetailsPage.module.css';
import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../Services/fetchMethods';

function MovieDetailsPage() {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const [from, setFrom] = useState(null);

  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(`${pathname}${search}`);
    }
  }, [state?.from, from]);

  const onGoBack = () => {
    navigate(from);
  };

  useEffect(() => {
    fetchMovieDetails(movieId).then(movieInfo => {
      setMovie(movieInfo);
    });
  }, [movieId]);

  const getYear = date => {
    //Парсимо дату
    const yearLine = date.split('-');
    return yearLine[0];
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={onGoBack}>
            {' '}
            Go back
          </button>
          <div className={styles.card}>
            <img
              src={`${BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              width="250"
            />
            <div className={styles.textCard}>
              <h1>
                {movie.title} ({getYear(movie.release_date)})
              </h1>
              <p>AVARAGE VOTE: {movie.vote_average}</p>
              <p>OVERVIEW: {movie.overview}</p>
            </div>
          </div>
        </>
      )}
      <h3>Additional information</h3>
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

export default MovieDetailsPage;
