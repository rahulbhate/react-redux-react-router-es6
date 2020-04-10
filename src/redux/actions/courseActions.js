import * as courseApi from "../../api/courseApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}
export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}
/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */
export function loadCourses() {
  console.log("Load Courses Called");
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourse(course) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}
