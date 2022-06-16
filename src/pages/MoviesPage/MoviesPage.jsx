import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBySearch } from '../../Services/fetchMethods';

import styles from './MoviesPage.module.css';

function MoviesPage() {
  // const [query, setQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    fetchBySearch(searchValue).then(movies => setMovies(movies));
  };

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
              <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export { MoviesPage };
