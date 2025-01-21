import React from 'react';
import { useState } from 'react';

function Search({ searchMovies = Function.prototype }) {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('all');
  const [year, setYear] = useState(2024);

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, genre, year);
    }
  };

  const handleGenre = (event) => {
    setGenre(event.target.value);
    // searchMovies(search, event.target.value, year);
  };

  const handleYear = (event) => {
    setYear(+event.target.value);
    // searchMovies(search, genre, event.target.value);
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            placeholder="Search ..."
            type="search"
            className="validate"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => searchMovies(search, genre, year)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="col s12 block">
        <span className="filters-radio">Genre:</span>
        <div>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="all"
              type="radio"
              checked={genre === 'all'}
              onChange={handleGenre}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="movie"
              type="radio"
              checked={genre === 'movie'}
              onChange={handleGenre}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="game"
              type="radio"
              checked={genre === 'game'}
              onChange={handleGenre}
            />
            <span>Game only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="series"
              type="radio"
              checked={genre === 'series'}
              onChange={handleGenre}
            />
            <span>Series only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_genre"
              value="episode"
              type="radio"
              checked={genre === 'episode'}
              onChange={handleGenre}
            />
            <span>Episode only</span>
          </label>
        </div>
      </div>
      <div className="col s12 block">
        <span className="filters-radio">Year:</span>
        <div>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2024"
              type="radio"
              checked={year === 2024}
              onChange={handleYear}
            />
            <span>2024</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2023"
              type="radio"
              checked={year === 2023}
              onChange={handleYear}
            />
            <span>2023</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2022"
              type="radio"
              checked={year === 2022}
              onChange={handleYear}
            />
            <span>2022</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2021"
              type="radio"
              checked={year === 2021}
              onChange={handleYear}
            />
            <span>2021</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="year"
              value="2020"
              type="radio"
              checked={year === 2020}
              onChange={handleYear}
            />
            <span>2020</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export { Search };
