import axios from "../config/axios";

export const getActors = (actor) => {
  return { type: "GET_ACTORS", payload: actor };
};

export const startGetActors = () => {
  return (dispatch) => {
    axios
      .get("/actors", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data.response);
        const actor = response.data.response;
        dispatch(getActors(actor));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addActors = (actor) => {
  return { type: "ADD_ACTORS", payload: actor };
};

export const startAddActors = (formData, redirect) => {
  console.log("add actor");
  return (dispatch) => {
    axios
      .post("/actor/create", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const actor = response.data.response;
        console.log(response.data.response);
        dispatch(addActors(actor));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateActor = (actor) => {
  return { type: "UPDATE_ACTOR", payload: actor };
};

export const startUpdateActors = (formData, redirect, id) => {
  console.log("update");
  return (dispatch) => {
    axios
      .put(`/actor/${id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const actor = response.data.response;
        console.log(actor);
        dispatch(updateActor(actor));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteActors = (id) => {
  return { type: "DELETE_ACTORS", payload: id };
};

export const startDeleteActors = (id) => {
  return (dispatch) => {
    axios
      .delete(`/actor/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const actor = response.data.response;
        console.log(response.data.response);
        dispatch(deleteActors(actor._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
