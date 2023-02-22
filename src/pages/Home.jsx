import { Container, Section } from 'components/App/App.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/api';
import { Loader } from './../components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .catch(error => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Section>
      <Container>
        <h1>Trending today</h1>
        {isLoading && <Loader />}
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};
