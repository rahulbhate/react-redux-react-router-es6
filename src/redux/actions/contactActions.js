import * as contactApi from "../../api/contactApi";

import { beginApiCall, apiCallError } from "./apiStatusActions";

export function contact(data) {
  return function (dispatch, getState) {
    return contactApi
      .contact(data)
      .then(res => {})
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
