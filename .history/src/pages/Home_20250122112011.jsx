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

  console.log(movies);

  const [searchParams, setSearchParams] = useState({
    search: '',
    genre: 'all',
    year: 2025,
  });

  const getAllFilms = async () => {
    const { search, genre, year } = searchParams;
    setLoading(true);
    setNameButton('Загружаю');
    try {
      const data = await getAllMovies(search, genre, year, pageCount);
      if (data?.Search?.length > 0) {
        // Если фильмы есть, добавляем их
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
        setNameButton('Показать еще');
      } else {
        // Если фильмов нет, показываем сообщение
        setNameButton('Фильмы закончились');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFilms();
    // eslint-disable-next-line
  }, [pageCount]);

  const searchMovies = async (str, type, year) => {
    setSearchParams({ search: str, genre: type, year });
    setPageCount(1); // Сброс номера страницы
    setLoading(true);
    try {
      const data = await getAllMoviesBySearch(str, type, year);
      setMovies(data?.Search ?? []);
      setNameButton('Показать ещё');
    } catch (err) {
      console.log(err);
    } finally {
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
          {movies.length > 0 && ( // Проверка, что фильмы загружены
            <Button
              clickCallback={handleShowMore}
              disabled={nameButton === 'Фильмы закончились'}
            >
              {nameButton}
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export { Home };
