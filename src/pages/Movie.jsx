import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config';
import { Preloader } from '../components/Preloader';
import { MovieTemplate } from '../components/MovieTemplate';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getInfoMovieById = async () => {
      try {
        const response = await fetch(`${API_URL}&i=${id}`);
        const dataFetch = await response.json();
        setMovie(dataFetch);
      } catch (err) {
        console.log(err);
      }
    };

    getInfoMovieById();
  }, [id]);

  return <>{!movie.imdbID ? <Preloader /> : <MovieTemplate {...movie} />}</>;
}

export { Movie };
