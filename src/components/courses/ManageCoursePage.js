import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import decode from "jwt-decode";
import { setCurrentUser } from "../../redux/actions/loginActions";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import { loadCategories } from "../../redux/actions/categoriesAction";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { newCourse } from "../../../tools/mockData";
const ManageCoursePage = ({
  courses,
  authors,
  categories,
  auth,
  loadCourses,
  loadAuthors,
  loadCategories,
  setCurrentUser,
  saveCourse,
  history,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    console.log("Use Effect Hook Called");
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (categories.length === 0) {
      loadCategories().catch(error => {
        alert("Loading categories failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]);
  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]:
        name === "authorId" || name === "categoryId"
          ? parseInt(value, 10)
          : value
    }));
    console.log(course);
  }
  const isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        console.log("isToken Expired function called");
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };
  function formIsValid() {
    const { title, authorId, categoryId } = course;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required";
    if (!categoryId) errors.category = "Category is required";
    // if (isTokenExpired(auth.token)) {
    //   history.push("/login");
    // }
    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave() {
    event.preventDefault();
    if (!formIsValid()) return;
    console.log(auth);
    setSaving(true);
    saveCourse(course)
      .then(() => {
        toast.info("Course Saved Successfully");
        history.push("/courses");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  return authors.length === 0 ||
    courses.length === 0 ||
    categories.length === 0 ? (
    <Spinner />
  ) : (
    <main className='pa4 black-80'>
      <CourseForm
        course={course}
        authors={authors}
        auth={auth}
        categories={categories}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </main>
  );
};
export function getCoursesBySlug(course, slug) {
  return course.find(course => course.slug === slug) || null;
}
const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCoursesBySlug(state.courses, slug)
      : newCourse;
  return {
    course,
    courses: state.courses,
    categories: state.categories,
    authors: state.authors,
    auth: state.auth
  };
};
const mapDispatchToProps = {
  loadCourses,
  loadCategories,
  loadAuthors,
  saveCourse,
  setCurrentUser
};
ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
