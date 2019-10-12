import { FETCH_MOVIES } from "./types";

export const getAllMovies = () => {
  const movies = [
    {
      title: "Avatar",
      genre: "Drama"
    },
    {
      title: "Inception",
      genre: "Sci-Fi"
    }
  ];

  return { type: FETCH_MOVIES, payload: movies };
};
