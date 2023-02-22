import axios from 'axios';
const API_KEY = 'f2a6d17811dc6597e4e94000fd1f12ef';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  page: 1,
  per_page: 20,
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`);

  return data.results;
};

export const getMovieById = async (id, page = 1) => {
  const { data } = await axios.get(`/movie/${id}`);

  return data;
};
export async function fetchFilmByQuery(query) {
  const response = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  const { data } = response;
  return data.results;
}
export const getMovieCastById = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);

  return data;
};
export const getMovieRewiewsById = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);

  return data.results;
};
