const actorsInitialState = [];

const actorsReducers = (state = actorsInitialState, action) => {
  switch (action.type) {
    case "GET_ACTORS": {
      return [...action.payload];
    }
    case "ADD_ACTORS": {
      return [...state, action.payload];
    }
    case "DELETE_ACTORS": {
      return state.filter((actor) => actor._id !== action.payload);
    }
    case "UPDATE_ACTOR": {
      return state.map((actor) => {
        if (actor._id === action.payload._id) {
          return { ...actor, ...action.payload };
        } else {
          return { ...actor };
        }
      });
    }
    default: {
      return [...state];
    }
  }
};

export default actorsReducers;
