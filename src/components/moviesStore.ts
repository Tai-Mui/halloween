const apiPath = 'https://data-imdb1.p.rapidapi.com/movie/byGen/Horror/';

export function fetchMovies () {
  return fetch(apiPath, {
    method: 'GET',
    headers: {
      'x-rapidapi-host' : 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key' : 'af2cbb0c72msh609fb3a515f34d5p17e30cjsn80143f762d82'
    }});
};