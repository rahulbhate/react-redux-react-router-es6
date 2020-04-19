import initialState from "./initialState";
import * as types from "../actions/actionTypes";
export default function categoriesReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}
