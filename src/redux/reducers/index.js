import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import filtersReducer from "./filters";
import categoriesReducer from "./categoriesReducer";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  cart: cartReducer,
  auth: authReducer,
  categories: categoriesReducer,
  filters: filtersReducer,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
