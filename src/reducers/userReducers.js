const userInitialState = {};

const userReducers = (state = userInitialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return { ...action.payload };
    }
    case "REMOVE_USER": {
      return userInitialState;
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducers;
