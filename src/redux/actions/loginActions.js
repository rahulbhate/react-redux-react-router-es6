import axios from "axios";
import * as types from "./actionTypes";
import * as loginApi from "../../api/loginApi";
import jwt from "jsonwebtoken";
import setAuthorizationToken from "../../../utils/setAuthorizationToken";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function setCurrentUser(user, token) {
  return {
    type: types.SET_CURRENT_USER,
    user,
    token
  };
}

export function logout() {
  return dispatch => {
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}
export function login(data) {
  return function (dispatch, getState) {
    return loginApi
      .loginUser(data)
      .then(res => {
        const token = res.data.token;
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token), token));
        return token;
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
