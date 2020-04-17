const filtersReducerDefaultState = {
  text: "",
  sortBy: ""
};

export default (state = filtersReducerDefaultState, action) => {
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
