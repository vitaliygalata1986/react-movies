import { useEffect, useState } from 'react';
import { getAllMovies} from '../api';
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
  const [nameButton, setNameButton] = useState('Show more');
  const [viewBtn, setViewBtn] = useState(false);

  const [searchParams, setSearchParams] = useState({
    search: '',
    genre: 'all',
    year: 2025,
  });

  useEffect(() => {
    const getAllFilms = async () => {
      const { search, genre, year } = searchParams;
      setLoading(true);
      setNameButton('Loading...');
      try {
        const data = await getAllMovies(search, genre, year, pageCount);
        if (data?.Search?.length > 0) {
          setMovies((prevMovies) =>
            pageCount === 1 ? data.Search : [...prevMovies, ...data.Search]
          );
          setNameButton('Show more');
          setViewBtn(true);
        } else {
          setNameButton('The movies are over');
          setViewBtn(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getAllFilms();
  }, [searchParams, pageCount]); // Теперь `getAllFilms` вызывается при изменении поиска

  const searchMovies = async (str, type, year) => {
    setSearchParams({ search: str, genre: type, year });
    setMovies([]); // Очищаем старые фильмы
    setPageCount(1); // Сбрасываем страницу
    setViewBtn(false); // Скрываем кнопку до загрузки
  };

  return (
    <div>
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Movies movies={movies} />
          {movies.length > 0 && viewBtn && (
            <Button clickCallback={() => setPageCount((prev) => prev + 1)}>
              {nameButton}
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export { Home };

/*
setMovies((prevMovies) =>
  pageCount === 1 ? data.Search : [...prevMovies, ...data.Search]
);
Если pageCount === 1, значит, пользователь сделал новый поиск (первая страница). В этом случае просто заменяем movies на data.Search (новые фильмы).
Если pageCount > 1, то загружаем дополнительную страницу фильмов и добавляем их к существующим (prevMovies).
*/
