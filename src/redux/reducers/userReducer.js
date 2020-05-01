import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS:
      console.log(action.user);
      return [...state, { ...action.user }];
    case types.LOGIN_USER_SUCCESS:
      return [...state, { ...action.user }];
    default:
      return state;
  }
}
