import * as categoriesApi from "../../api/categoriesApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}
/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */
export function loadCategories() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return categoriesApi
      .getCategories()
      .then(categories => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
