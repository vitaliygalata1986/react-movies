import React from 'react';
import { useState } from 'react';

function Search({ searchMovies = Function.prototype }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [year, setYear] = useState(2023);

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type, year);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.value);
    searchMovies(search, event.target.value, year);
  };

  const handleYear = (event) => {
    setYear(+event.target.value);
    searchMovies(search, type, event.target.value);
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
            onClick={() => searchMovies(search, type, year)}
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
              name="filter_film"
              value="all"
              type="radio"
              checked={type === 'all'}
              onChange={handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_film"
              value="movie"
              type="radio"
              checked={type === 'movie'}
              onChange={handleFilter}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_film"
              value="game"
              type="radio"
              checked={type === 'game'}
              onChange={handleFilter}
            />
            <span>Game only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_film"
              value="series"
              type="radio"
              checked={type === 'series'}
              onChange={handleFilter}
            />
            <span>Series only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter_film"
              value="episode"
              type="radio"
              checked={type === 'episode'}
              onChange={handleFilter}
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
