import React, { useState } from "react";
import { connect } from "react-redux";
import { createCourse } from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
const AddCourse = ({ createCourse, ...props }) => {
  const [course, setCourse] = useState({});
  function handleChange(event) {
    setCourse({ ...course, title: event.target.value });
  }
  function save() {
    event.preventDefault();
    createCourse(course);
    console.log({ course });
  }
  return (
    <div>
      Add Course Page
      <form onSubmit={save}>
        <input type='text' onChange={handleChange} value={props.course} />
        <input type='submit' value='save' />
        {props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};
const mapDispatchToProps = {
  createCourse
};
AddCourse.prototype = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
