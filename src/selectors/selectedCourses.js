import _ from "lodash";
import { createSelector } from "reselect";

const coursesSelector = state => state.courses;

const selectedCoursesSelector = state => state.selectedCourseTitles;

const getCourses = (courses, selectedCourseTitles) => {
  const selectedCourses = _.filter(courses, course =>
    _.contains(selectedCourseTitles, course.id)
  );
  return selectedCourses;
};

export default createSelector(
  coursesSelector,
  selectedCoursesSelector,
  getCourses
);
