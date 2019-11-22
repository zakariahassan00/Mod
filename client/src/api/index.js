import axios from "axios";

// this should not be here but its a side project
const API_KEY = "0c2fe905bc563d51fddca679b6766463";

// get similar movies or TV shows from tmdb api
export const getSimilarMovies = async id => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`
  );

  // modifing images url in data
  let similarContent = res.data.results.map(content => {
    content.poster_path = `https://image.tmdb.org/t/p/original${content.poster_path}`;
    return content;
  });

  return similarContent;
};

// get Upcoming Movies
export const getUpcomingMovies = async (page = 1) => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  // modifing images url in data
  let similarContent = res.data.results.map(content => {
    content.poster_path = `https://image.tmdb.org/t/p/original${content.poster_path}`;
    return content;
  });

  // let genres = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0c2fe905bc563d51fddca679b6766463&language=en-US')

  return similarContent;
};
