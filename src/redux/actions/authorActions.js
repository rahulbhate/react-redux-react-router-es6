import * as courseApi from "../../api/authorApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}
/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */
export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
