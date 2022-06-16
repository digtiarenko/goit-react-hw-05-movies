import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchBySearch } from '../../Services/fetchMethods';

import styles from './MoviesPage.module.css';

function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line
  const [query, setQuery] = useState(location?.search ?? '');
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = event => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(searchValue);
    setSearchParams(searchValue);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchBySearch(query).then(movies => setMovies(movies));
  }, [query]);

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchFormInput}
          value={searchValue}
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="enter your movie"
        />
        <button className={styles.searchFormButton} type="submit">
          Search
        </button>
      </form>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export { MoviesPage };
