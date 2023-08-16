import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
    year: 2023,
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(
        this.state.search,
        this.state.type,
        this.state.year
      );
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => {
        this.props.searchMovies(
          this.state.search,
          this.state.type,
          this.state.year
        );
      }
    );
  };

  handleYear = (event) => {
    this.setState(
      () => ({ year: +event.target.value }),
      () => {
        this.props.searchMovies(
          this.state.search,
          this.state.type,
          this.state.year
        );
      }
    );
  };

  render() {
    const { type, year } = this.state;
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="Search ..."
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
              onKeyDown={this.handleKey}
            />
            <button
              className="btn search-btn"
              onClick={() =>
                this.props.searchMovies(
                  this.state.search,
                  this.state.type,
                  this.state.year
                )
              }
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
                onChange={this.handleFilter}
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
                onChange={this.handleFilter}
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
                onChange={this.handleFilter}
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
                onChange={this.handleFilter}
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
                onChange={this.handleFilter}
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
                onChange={this.handleYear}
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
                onChange={this.handleYear}
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
                onChange={this.handleYear}
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
                onChange={this.handleYear}
              />
              <span>2020</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
