import * as types from "./actionTypes";
import * as checkoutApi from "../../api/checkoutApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
export function addToCart(course) {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    course
  };
}
export function loadCart() {
  return {
    type: types.LOAD_CART_DATA_SUCCESS
  };
}

export function deleteCartItem(course) {
  return { type: types.DELETE_ITEM_CART_SUCCESS, course };
}

export function deleteAllCartItems() {
  return { type: types.DELETE_ALL_ITEMS_CART_SUCCESS };
}

export function checkout(data) {
  console.log("Checkout Called");
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return checkoutApi
      .checkout(data)
      .then(res => {})
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
