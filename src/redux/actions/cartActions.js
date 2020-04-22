import * as types from "./actionTypes";

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
