import axios from "../config/axios";

export const getProducers = (producer) => {
  return { type: "GET_PRODUCERS", payload: producer };
};

export const startGetProducers = () => {
  return (dispatch) => {
    axios
      .get("/producers", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data.response);
        const producer = response.data.response;
        dispatch(getProducers(producer));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addProducers = (producer) => {
  return { type: "ADD_PRODUCERS", payload: producer };
};

export const startAddProducers = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post("/producer/create", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const producer = response.data.response;
        console.log(response.data.response);
        dispatch(addProducers(producer));
        redirect();
      });
  };
};

export const updateProducer = (producer) => {
  return { type: "UPDATE_PRODUCER", payload: producer };
};

export const startUpdateProducers = (formData, redirect, id) => {
  return (dispatch) => {
    axios
      .put(`/producer/${id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const producer = response.data.response;
        console.log(producer);
        dispatch(updateProducer(producer));
        redirect();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteProducers = (id) => {
  return { type: "DELETE_PRODUCERS", payload: id };
};

export const startDeleteProducers = (id) => {
  return (dispatch) => {
    axios
      .delete(`/producer/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const producer = response.data.response;
        console.log(response.data.response);
        dispatch(deleteProducers(producer._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
