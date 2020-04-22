import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  loadCourses,
  deleteCourse,
  searchCourse
} from "../../redux/actions/courseActions";
import getVisibleCourses from "../../selectors/courses";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCategories } from "../../redux/actions/categoriesAction";
import PropTypes from "prop-types";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { getCourses } from "../../api/courseApi";
const CoursesPage = ({
  loadCourses,
  loadAuthors,
  loadCategories,
  courses,
  authors,
  categories,
  deleteCourse,
  searchCourse,
  ...props
}) => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);
  const [posts, setPosts] = useState([{}]);
  const [loading, setLoading] = useState(false);
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
    if (categories.length === 0) {
      loadCategories().catch(error => {
        alert("Loading categories failed" + error);
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
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <Button
            title='Add Course'
            type='primary'
            onClick={() => {
              setRedirectToAddCoursePage({ redirectToAddCoursePage: true });
            }}
          />
          <CourseList onDeleteClick={handleDeleteCourse} courses={courses} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    courses: getVisibleCourses(
      state.courses,
      state.authors,
      state.categories,
      state.filters
    ),
    authors: state.authors,
    categories: state.categories,
    loading: state.apiCallsInProgress > 0
  };
};
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  loadCategories,
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
