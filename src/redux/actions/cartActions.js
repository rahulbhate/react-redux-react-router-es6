import * as types from "./actionTypes";

export function addToCart(course) {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    course
  };
}

export function deleteCartItem(course) {
  return { type: types.DELETE_ITEM_CART_SUCCESS, course };
}
