import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadCourses,
  deleteCourse,
  searchCourse
} from "../../redux/actions/courseActions";
import getVisibleCourses from "../../selectors/courses";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { getCourses } from "../../api/courseApi";
const CoursesPage = ({
  loadCourses,
  loadAuthors,
  courses,
  authors,
  deleteCourse,
  searchCourse,
  ...props
}) => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);
  useEffect(() => {
    console.log("Use Effect Hook Called");
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  const handleDeleteCourse = async course => {
    toast.success("Course deleted");
    try {
      await deleteCourse(course);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };
  return (
    <>
      {redirectToAddCoursePage && <Redirect to='/course' />}
      <h3>Courses</h3>
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className='btn btn-primary'
            onClick={() => {
              setRedirectToAddCoursePage({ redirectToAddCoursePage: true });
            }}
          >
            Add Course
          </button>
          {/* <input
            type='text'
            placeholder={"Search...."}
            onChange={e => searchCourse(e.target.value)}
          /> */}
          <CourseList onDeleteClick={handleDeleteCourse} courses={courses} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    courses: getVisibleCourses(state.courses, state.authors, state.filters),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0
  };
};
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  deleteCourse,
  searchCourse
};
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadCourses: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
