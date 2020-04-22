import initialState from "./initialState";

export default (state = initialState.filters, action) => {
  switch (action.type) {
    case "FILTER_TEXT":
      return {
        ...state,
        text: action.text
      };

    case "SORT_BY":
      return {
        ...state,
        sortBy: action.sortType
      };
    default:
      return state;
  }
};
