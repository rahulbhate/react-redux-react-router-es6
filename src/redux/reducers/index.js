import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import cartReducer from "./cartReducer";
import filtersReducer from "./filters";
import categoriesReducer from "./categoriesReducer";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  cart: cartReducer,
  categories: categoriesReducer,
  filters: filtersReducer,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
