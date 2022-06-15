export const fetchTrending = async () => {
  const apiKey = '22957cc42cbc2dcfc04c7fad2963e2db';

  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
  );

  const data = await response.json();
  if (data.total === 0) {
    return Promise.reject(new Error(`Ooops something went wrong`));
  } else {
    return data.results;
  }
};
