import axios from 'axios';

const TMDB_KEY = '2f12e13bca813f24b7ef97ab811f66ec';

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (error) {
    return [null, error];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything('/movie/now_playing'),
  popular: () => getAnything('/movie/popular'),
  upcoming: () => getAnything('/movie/upcoming', { region: 'kr' }),
  search: (query) => getAnything('/search/movie', { query }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () => getAnything('/discover/movie'),
};

export const tvApi = {
  today: () => getAnything('/tv/airing_today'),
  thisWeek: () => getAnything('/tv/on_the_air'),
  topRated: () => getAnything('/tv/top_rated'),
  popular: () => getAnything('/tv/popular'),
  search: (query) => getAnything('/search/tv', { query }),
  show: (id) => getAnything(`/tv/${id}`),
};

export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/original${path}`
    : 'https://images.unsplash.com/photo-1545164630-64ccc5195afb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
