const moviesInitialState = [];

const moviesReducers = (state = moviesInitialState, action) => {
  switch (action.type) {
    case "SET_MOVIES": {
      return [...action.payload];
    }
    case "ADD_MOVIES": {
      return [...state, action.payload];
    }
    case "DELETE_MOVIES": {
      return state.filter((movie) => movie._id !== action.payload);
    }
    case "UPDATE_MOVIES": {
      return state.map((movie) => {
        if (movie._id === action.payload._id) {
          return { ...movie, ...action.payload };
        } else {
          return { ...movie };
        }
      });
    }
    default: {
      return [...state];
    }
  }
};

export default moviesReducers;
