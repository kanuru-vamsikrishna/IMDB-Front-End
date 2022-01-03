import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";
import { startSetUser } from "../src/actions/userActions";
import { startGetMovies } from "./actions/movieActions";
import { startGetProducers } from "./actions/producersActions";
import { startGetActors } from "./actions/actorsActions";

const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

// handling page reloads
if (localStorage.getItem("authToken")) {
  store.dispatch(startSetUser());
  store.dispatch(startGetMovies());
  store.dispatch(startGetProducers());
  store.dispatch(startGetActors());
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
