export const fetchTrending = async () => {
  const apiKey = '22957cc42cbc2dcfc04c7fad2963e2db';

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
  );

  const data = await response.json();
  if (data.ok) {
    return Promise.reject(new Error(`Ooops something went wrong`));
  } else {
    return data.results;
  }
};

export const fetchBySearch = async query => {
  const apiKey = '22957cc42cbc2dcfc04c7fad2963e2db';

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=true`,
  );

  const data = await response.json();
  if (data.ok) {
    return Promise.reject(new Error(`Ooops something went wrong`));
  } else {
    return data.results;
  }
};

export const fetchMovieDetails = async movieId => {
  const apiKey = '22957cc42cbc2dcfc04c7fad2963e2db';

  const response = await fetch(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);

  const data = await response.json();

  if (data.ok) {
    return Promise.reject(new Error(`Ooops something went wrong`));
  } else {
    return data;
  }
};

export const fetchCredits = async movieId => {
  const apiKey = '22957cc42cbc2dcfc04c7fad2963e2db';

  const response = await fetch(`
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`);

  const data = await response.json();

  if (data.ok) {
    return Promise.reject(new Error(`Ooops something went wrong`));
  } else {
    return data.cast;
  }
};

export const fetchReviews = async movieId => {
  const apiKey = '22957cc42cbc2dcfc04c7fad2963e2db';

  const response = await fetch(`
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`);

  const data = await response.json();

  if (data.ok) {
    return Promise.reject(new Error(`Ooops something went wrong`));
  } else {
    return data.results;
  }
};
