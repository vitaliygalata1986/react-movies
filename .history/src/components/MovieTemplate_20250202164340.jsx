import { Button } from './Button.jsx';
import { useNavigate } from 'react-router-dom';

function MovieTemplate({
  Title: title,
  Year: year,
  imdbID: id,
  Type: type,
  Poster: poster,
  Genre: genre,
  Plot: plot,
  BoxOffice: boxoffice,
  Country: country,
  Ratings: ratings,
  Writer: writer,
}) {
  let formatYear = year.replace(/[^0-9]/g, '');
  const navigate = useNavigate();
  return (
    <>
      <Button clickCallback=''>Back</Button>
      <div className='card movie-info'>
        <div className='card-image waves-effect waves-block waves-light'>
          {poster === 'N/A' ? (
            <img
              className='activator'
              src={`https://placehold.co/300x450?text=${title}`}
              alt=''
            />
          ) : (
            <img className='activator' src={poster} alt='' />
          )}
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {title}
          </span>
          <p>
            <strong>Year: </strong>
            {formatYear}
          </p>
          <p>
            <strong>Type: </strong>
            {type}
          </p>
          <p>
            <strong>Genre: </strong>
            {genre}
          </p>
          <p>
            <strong>Writer: </strong>
            {writer}
          </p>
          <p>
            <strong>Country: </strong>
            {country}
          </p>
          {plot !== 'N/A' ? (
            <p>
              <strong>Description: </strong>
              {plot}
            </p>
          ) : null}

          {ratings.length ? (
            <p>
              <strong>Ratings: </strong>
              {ratings.map((rating, index) => (
                <span key={index}>
                  {rating.Source}: {rating.Value}
                  {index < ratings.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export { MovieTemplate };
