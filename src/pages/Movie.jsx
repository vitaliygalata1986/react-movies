import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviById } from '../api';
import { Preloader } from '../components/Preloader';
import { MovieTemplate } from '../components/MovieTemplate';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getInfoMovieById = async () => {
    try {
      const dataFetch = await getMoviById(id);
      setMovie(dataFetch);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfoMovieById();
  }, [id]);

  return <>{!movie.imdbID ? <Preloader /> : <MovieTemplate {...movie} />}</>;
}

export { Movie };
