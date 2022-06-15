import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../../Services/fetchTrending';
import { Item } from './HomePage.styled';

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
            <Item key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </Item>
          ))}
        </ol>
      )}
    </main>
  );
}
