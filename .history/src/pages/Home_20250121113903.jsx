import { useEffect, useState } from 'react';
import { getAllMovies, getAllMoviesBySearch } from '../api';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
import { Button } from '../components/Button';
import '../materialize.min.css';
import '../index.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [nameButton, setNameButton] = useState('Показать еще');

  const getAllFilms = async () => {
    setNameButton('Загружаю...');
    try {
      const data = await getAllMovies(pageCount);
      setMovies((prevMovies) => [...prevMovies, ...(data?.Search ?? [])]);
      setLoading(false);
      setNameButton('Показать еще');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFilms();
    // eslint-disable-next-line
  }, [pageCount]);

  const searchMovies = async (str, type, year) => {
    try {
      const data = await getAllMoviesBySearch(str, type, year);
      setMovies((prevMovies) => [...prevMovies, ...(data?.Search ?? [])]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setPageCount((prev) => prev + 1); // Увеличиваем номер страницы
  };

  return (
    <div>
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Movies movies={movies} />
          {<Button onClick={handleShowMore}>{nameButton}</Button>}
        </>
      )}
    </div>
  );
}

export { Home };
