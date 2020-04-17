import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseFilters from "./CourseFilters";
const CourseList = ({ courses, onDeleteClick }) => {
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  useEffect(() => {
    setFilteredCourses(
      courses.filter(course => {
        let filterString = course.title.toLowerCase();
        return filterString.indexOf(search.toLowerCase()) !== -1;
      })
    );
  }, [search, filteredCourses]);
  // let filteredCurrencies = courses.filter(course => {
  //   let filterString = course.title.toLowerCase();
  //   return filterString.indexOf(search.toLowerCase()) !== -1;
  // });
  return (
    <>
      <h3>Course Filter Component</h3>

      <CourseFilters />
      {/* <input
        type='text'
        placeholder={"Search...."}
        onChange={e => setSearch(e.target.value)}
      /> */}
      {/* {search} */}

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
          {filteredCourses.map(course => {
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
  onDeleteClick: PropTypes.func.isRequired,
  onSearchCourse: PropTypes.func.isRequired
};

export default CourseList;
