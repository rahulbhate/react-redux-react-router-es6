import initialState from "./initialState";
import * as types from "../actions/actionTypes";
export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.ADD_TO_CART_SUCCESS: {
      const existingProduct = state.filter(p => p.id === action.course.id);
      if (existingProduct.length > 0) {
        const withoutExistingProduct = state.filter(
          p => p.id !== action.course.id
        );
        const updatedUnitsProduct = {
          ...existingProduct[0]
        };
        return [...withoutExistingProduct, updatedUnitsProduct];
      } else {
        return [...state, { ...action.course }];
      }
    }
    case types.LOAD_CART_DATA_SUCCESS:
      return [...state];
    //return [...state, action.course];

    case types.DELETE_ITEM_CART_SUCCESS:
      return state.filter(cart => cart.id !== action.course.id);
    default:
      return state;
  }
}
