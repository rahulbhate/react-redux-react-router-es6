import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import filtersReducer from "./filters";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  filters: filtersReducer,
  apiCallsInProgress: apiCallsInProgress
});

export default rootReducer;
