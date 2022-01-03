import axios from "../config/axios";

export const setMovies = (movie) => {
  return { type: "SET_MOVIES", payload: movie };
};

export const startGetMovies = () => {
  return (dispatch) => {
    axios
      .get("/movies", {
        headers: { "x-auth": localStorage.getItem("authToken") },
      })
      .then((response) => {
        // console.log(response.data.response);
        const movie = response.data.response;
        dispatch(setMovies(movie));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addMovies = (movie) => {
  return { type: "ADD_MOVIES", payload: movie };
};

export const startAddMovies = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post("/movie/create", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const movie = response.data.response;
        dispatch(addMovies(movie));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateMovies = (movie) => {
  return { type: "UPDATE_MOVIES", payload: movie };
};

export const startUpdateMovies = (formData, redirect, id) => {
  return (dispatch) => {
    axios
      .put(`/movie/${id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data.response);
        const movie = response.data.response;
        dispatch(updateMovies(movie));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteMovies = (id) => {
  return { type: "DELETE_MOVIES", payload: id };
};

export const startDeleteMovies = (id) => {
  return (dispatch) => {
    axios
      .delete(`/movie/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const movie = response.data.response;
        dispatch(deleteMovies(movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
