import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseFilters from "./CourseFilters";

const CourseList = ({ courses, onDeleteClick }) => {
  return (
    <>
      <div className='fl w-50 bg-near-white tc'>
        <CourseFilters />
      </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.authorName}</td>
                <td>{course.category}</td>
                <td>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => onDeleteClick(course)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
