import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore() {
  // order for persisted State is very important otherwise it will generate
  // redux error about actions must be
  const persistedState = loadFromLocalStorage();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
    )
  );
  store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });
  return store;
}

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
  }
}
