function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [nameButton, setNameButton] = useState('Показать еще');

  const getAllFilms = async () => {
    setLoading(true);
    setNameButton('Загружаю...');
    try {
      const data = await getAllMovies(pageCount);
      if (data?.Search?.length > 0) {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
        setNameButton('Показать еще');
      } else {
        setNameButton('Фильмы закончились');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFilms();
  }, [pageCount]);

  const searchMovies = async (str, type, year) => {
    setLoading(true);
    try {
      const data = await getAllMoviesBySearch(str, type, year);
      setMovies(data?.Search ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setPageCount((prev) => prev + 1);
  };

  return (
    <div>
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Movies movies={movies} />
          {movies.length > 0 && nameButton !== 'Фильмы закончились' && (
            <Button clickCallback={handleShowMore}>{nameButton}</Button>
          )}
        </>
      )}
    </div>
  );
}
