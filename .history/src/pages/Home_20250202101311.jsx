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
  const [nameButton, setNameButton] = useState('Show more');

  const [searchParams, setSearchParams] = useState({
    search: '',
    genre: 'all',
    year: 2025,
  });

  const getAllFilms = async () => {
    const { search, genre, year } = searchParams;
    setLoading(true);
    setNameButton('Loading...');
    try {
      const data = await getAllMovies(search, genre, year, pageCount);
      if (data?.Search?.length > 0) {
        // If there are films, add them
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
        setNameButton('Show more');
      } else {
        // If there are no movies, we show a message
        setNameButton('The movies are over');
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
    setPageCount(1); // reset page number
    setLoading(true);
    try {
      const data = await getAllMoviesBySearch(str, type, year);
      setMovies(data?.Search ?? []);
      setNameButton('Show more');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setPageCount((prev) => prev + 1); // increase the page number
  };

  return (
    <div>
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Movies movies={movies} />
          {movies.length > 0 &&
            nameButton !== 'Фильмы закончились' && ( // Скрыть кнопку, если фильмы закончились
              <Button clickCallback={handleShowMore}>{nameButton}</Button>
            )}
        </>
      )}
    </div>
  );
}

export { Home };
