import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
}
function loadFromLocalStorage(state) {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

//  import { saveState, loadState } from "./localStorage";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(app, persistedState);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
