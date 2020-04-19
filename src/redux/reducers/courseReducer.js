import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function courseReducer(state = [{}], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      console.log(action.course);
      return [...state, { ...action.course }];
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.SEARCH_FILTER: {
      let filteredCurrencies = state.filter(course => {
        let filterString = course.title.toLowerCase();
        return filterString.indexOf(action.course.toLowerCase()) !== -1;
      });
      if (action.course.length !== 0) {
        return filteredCurrencies;
      } else {
        alert("empty");
        return [...state];
      }
    }
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}
