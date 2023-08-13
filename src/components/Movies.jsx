import { Movie } from './Movie';

function Movies({ movies }) {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} /> // так как мы получаем массив объектов, то применим spread оператор
      ))}
    </div>
  );
}

export { Movies };

/*
      {
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />; // так как мы получаем массив объектов, то применим spread оператор
        });
      }
      
*/
