import { useEffect, useState } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
import { Button } from '../components/Button';
import { API_URL } from '../config';
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

  const fetchMovies = async (params, page) => {
    const { search, genre, year } = params;
    setLoading(true);
    setNameButton('Loading...');

    try {
      const response = await fetch(
        `${API_URL}&s=${search || 'all'}${
          genre !== 'all' ? `&type=${genre}` : ''
        }&y=${year}&page=${page}`
      );
      const data = await response.json();

      if (data?.Search?.length > 0) {
        setMovies((prevMovies) =>
          page === 1 ? data.Search : [...prevMovies, ...data.Search]
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

  useEffect(() => {
    fetchMovies(searchParams, pageCount);
  }, [searchParams, pageCount]); // Теперь `fetchMovies` вызывается при изменении поиска

  const searchMovies = (str, type, year) => {
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

/*
Таким образом, fetchMovies вызывается:
  Один раз при загрузке страницы.
  Еще раз при изменении searchParams (новый поиск).
  Еще раз при увеличении pageCount (загрузка следующей страницы).
Поэтому функцию оставляют снаружи useEffect, чтобы можно было переиспользовать её в searchMovies и useEffect.
*/

/*
  Когда компонент монтируется (Home загружается), fetchMovies вызывается с начальными параметрами (searchParams и pageCount).
  Если пользователь меняет жанр, год или вводит новый запрос в Search, searchParams обновляются → вызывается fetchMovies заново.
  Если пользователь нажимает «Show more», увеличивается pageCount, что тоже вызывает fetchMovies (для подгрузки следующей страницы фильмов).
*/

/*
  Общее правило
    Если функция используется только внутри useEffect, то объявляем её там.
    Если функция нужна и в useEffect, и в других частях кода, выносим её наружу.
*/
