import axios from "axios";

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

  return { type: "fetch_movies", payload: movies };
};

export const getUser = () => async dispatch => {
  const user = await axios.get("/api/cu");

  dispatch({ type: "fetch_user", payload: user.data });
};
