import { Link } from 'react-router-dom';

function Movie({
  Title: title,
  Year: year,
  imdbID: id,
  Type: type,
  Poster: poster,
}) {
  let yearFilm = year;
  console.log(yearFilm);
  return (
    <Link to={`/movie/${id}`} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img
            className="activator"
            src={`https://placehold.co/300x450?text=${title}`}
            alt=""
          />
        ) : (
          <img className="activator" src={poster} alt="" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </Link>
  );
}

export { Movie };
