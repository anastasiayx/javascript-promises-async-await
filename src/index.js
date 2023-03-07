import { fetchWithTimeout, fetchMovies, fetchBooks } from './services';

const movies = require('./data/movies.json');

function getBooksAndMovies() {
  return Promise.all([fetchMovies(), fetchBooks()])
    .then(([movies, books]) => {
      movies, books;
    })
    .catch((error) => console.log('Error fetching movies and books ', error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then((results) =>
  console.log('getBooksAndMoviesPromise ', results)
);

function getBooksOrMovies() {
  return Promise.race([fetchMovies(), fetchBooks()])
    .then((results) => results)
    .catch((error) =>
      console.log('Error waiting for the promise race ', error)
    );
}

const getBooksOrMoviesPromise = getBooksOrMovies();

getBooksOrMovies.then((results) =>
  console.log('getBooksOrMoviesPromise ', results)
);
