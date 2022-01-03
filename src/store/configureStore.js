import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducers from "../reducers/userReducers";
import moviesReducers from "../reducers/moviesReducers";
import actorsReducers from "../reducers/actorsReducers";
import producersReducers from "../reducers/producersReducers";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducers,
      movies: moviesReducers,
      actors: actorsReducers,
      producers: producersReducers,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
