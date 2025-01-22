import { API_URL } from './config';

// get all movies
const getAllMovies = async (pageCount) => {
  const responce = await fetch(`${API_URL}&s=all&y=2024&page=${pageCount}`);
  return await responce.json();
};

// get movie by id
const getMoviById = async (id) => {
  const responce = await fetch(`${API_URL}&i=${id}`);
  return await responce.json();
};

// get all movies by search
const getAllMoviesBySearch = async (str, type, year) => {
  const responce = await fetch(
    `${API_URL}&s=${str ? str : 'all'}${
      type !== 'all' ? `&type=${type}` : ''
    }&y=${year}`
  );
  return await responce.json();
};

export { getAllMovies, getAllMoviesBySearch, getMoviById };
