import { fetchWithTimeout, fetchMovies, fetchBooks } from './services';

const movies = require('./data/movies.json');

function getBooksAndMovies() {
  return Promise.all([fetchMovies(), fetchBooks()]);
}

const getBooksAndMoviesPromise = getBooksAndMovies()
  .then(([movies, books]) => {
    movies, books;
  })
  .catch((error) => console.log('Error fetching movies and books ', error));

getBooksAndMoviesPromise.then((results) =>
  console.log('getBooksAndMoviesPromise ', results)
);

function getMoviesOrBooks() {
  return Promise.race([fetchMovies(), fetchBooks()]);
}

const getMoviesOrBooksPromise = getMoviesOrBooks()
  .then((results) => results)
  .catch((error) => console.log('Error waiting for the promise race ', error));

getMoviesOrBooks.then((results) =>
  console.log('getBooksOrMoviesPromise ', results)
);
