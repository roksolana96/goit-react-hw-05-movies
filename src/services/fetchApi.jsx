import axios from 'axios';

const KEY = 'f2d00b13296250bbaa36e82e90ab2e9e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingFilms() {
  const data = await axios('trending/all/day', {
    params: {
      api_key: KEY,
    },
  });
  return data.data.results;
}

export async function fetchFilmById(id) {
  const data = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}
export async function fetchFilmReviews(id) {
  const data = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}

export async function fetchFilmCredits(id) {
  const data = await axios(`movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}

export async function fetchSearchFilm(query) {
  const data = await axios(`search/movie`, {
    params: {
      api_key: KEY,
      query: query,
      language: 'en-US',
      page: 1,
    },
  });

  return data.data.results;
}