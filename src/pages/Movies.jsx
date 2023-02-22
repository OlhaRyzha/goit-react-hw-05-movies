import { fetchFilmByQuery } from 'service/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Section, Container } from 'components/App/App.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const movie = searchParams.get('movie');

    if (!movie) return;
    setIsLoading(true);
    fetchFilmByQuery(movie)
      .then(data => setMovies(data))
      .catch(error => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const handleSubmit = movie => {
    setSearchParams({ movie });
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};
export default Movies;
