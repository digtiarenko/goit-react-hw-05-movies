import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../../Services/fetchMethods';
import styles from './HomePage.module.css';

export function HomePage() {
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
              <Link className={styles.item} to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
