import * as types from "./actionTypes";
export const filterText = (text = "") => ({
  type: types.FILTER_TEXT,
  text
});

export const sortBy = sortType => ({
  type: types.SORT_BY,
  sortType
});
