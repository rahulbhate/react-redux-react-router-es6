import * as usersApi from "../../api/usersApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createUserSuccess(user) {
  return { type: types.CREATE_USER_SUCCESS, user };
}
export function loginUserSuccess(user) {
  return { type: types.LOGIN_USER_SUCCESS, user };
}
/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */

export function saveUser(user) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return usersApi
      .saveUser(user)
      .then(savedUser => {
        dispatch(createUserSuccess(savedUser));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loginUser(user) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return usersApi
      .loginUser(user)
      .then(savedUser => {
        dispatch(loginUserSuccess(savedUser));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
