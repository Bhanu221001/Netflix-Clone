// TMDBService.js
import axios from 'axios';

const API_KEY = '76deadecb4e996be0639c6b2a624a68c';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbService = axios.create({
  baseURL: BASE_URL,
});

tmdbService.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = API_KEY;
  return config;
});

export const searchMovies = (query) => {
  return tmdbService.get('/search/movie', {
    params: { query },
  });
};
