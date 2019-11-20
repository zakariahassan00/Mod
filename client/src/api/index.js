import axios from "axios";

// get similar movies or TV shows from tmdb api
export const getSimilarMovies = async id => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=0c2fe905bc563d51fddca679b6766463&language=en-US`
  );

  // modifing images url in data
  let similarContent = res.data.results.map(content => {
    content.poster_path = `https://image.tmdb.org/t/p/original${content.poster_path}`;
    return content;
  });

  return similarContent;
};
