import { API_URL } from './config';

// get all movies
const getAllMovies = async (search, genre, year, pageCount) => {
  const responce = await fetch(
    `${API_URL}&s=${search || 'all'}${
      genre !== 'all' ? `&type=${genre}` : ''
    }&y=${year}&page=${pageCount}`
  );
  return await responce.json();
};

// get movie by id
const getMoviById = async (id) => {
  const responce = await fetch(`${API_URL}&i=${id}`);
  return await responce.json();
};

// get all movies by search
const getAllMoviesBySearch = async (str, type, year) => {
  const responce = await fetch(`${API_URL}&s=${search || 'all'}${
      genre !== 'all' ? `&type=${genre}` : ''
    }&y=${year}&page=${pageCount}`;
  );
  return await responce.json();
};

export { getAllMovies, getAllMoviesBySearch, getMoviById };
