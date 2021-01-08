const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'd91911ebb88751cf9e5c4b8fdf4412c9';

async function fetchErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('такої сторінки нема'));
}

export function fetchTrendingMovies() {
  return fetchErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}
export function fetchMoviesId(movieId) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`,
  );
}

export function fetchCast(moviedId) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${moviedId}/credits?api_key=${KEY}&language=en-US`,
  );
}

export function fetchReviews(moviedId) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${moviedId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
}

export function fetchSearchMovies(searchQuery, page) {
  return fetchErrorHandling(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`,
  );
}
