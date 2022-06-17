import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from '../../Services/fetchMethods';
import styles from './HomePage.module.css';

function HomePage() {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(list => setTrendingMovies(list));
  }, []);

  return (
    <main>
      <h1>TRENDING MOVIES</h1>
      {trendingMovies && (
        <ol>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link
                className={styles.item}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}

export default HomePage;
