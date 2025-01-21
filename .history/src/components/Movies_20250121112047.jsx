import { Movie } from './Movie';
import Button from '../components/Button';
// function Movies({ movies = [], pageCount, setPageCount, onClick, loading }) {
function Movies({ movies = [], pageCount, setPageCount, onClick, loading }) {
  // function Movies({ ...props }) {
  // console.log(movies); // если прилетит undefined, то по умолчанию назначим пустой массив
  return (
    <>
      <div className='movies'>
        {movies.length ? (
          movies.map((movie) => (
            <Movie key={movie.imdbID} {...movie} /> // так как мы получаем массив объектов, то применим spread оператор
          ))
        ) : (
          <h4>Nothing found</h4>
        )}
      </div>
    </>
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
