const producersInitialState = [];

const producersReducers = (state = producersInitialState, action) => {
  switch (action.type) {
    case "GET_PRODUCERS": {
      return [...action.payload];
    }
    case "ADD_PRODUCERS": {
      return [...state, action.payload];
    }
    case "DELETE_PRODUCERS": {
      return state.filter((producer) => producer._id !== action.payload);
    }
    case "UPDATE_PRODUCER": {
      return state.map((producer) => {
        if (producer._id === action.payload._id) {
          return { ...producer, ...action.payload };
        } else {
          return { ...producer };
        }
      });
    }
    default: {
      return [...state];
    }
  }
};

export default producersReducers;
