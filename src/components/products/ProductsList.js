import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CourseFilters from "../courses/CourseFilters";
const ProductsList = ({ courses }) => {
  return (
    <>
      <main className='pa3 pa3-ns flex flex-wrap'>
        <CourseFilters />
        {courses.map(course => (
          <Product key={course.id} {...course} />
        ))}
      </main>
    </>
  );
};

ProductsList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default ProductsList;

const Product = ({ id, title, category, authorName, picture }) => {
  return (
    <div
      className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'
      key={id}
    >
      <div className='tc'>
        <img src={picture} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
        <h1 className='f3 mb2'>{title}</h1>
        <h2 className='f5 fw4 gray mt0'>{authorName}</h2>
        <h2 className='f5 fw4 gray mt0'>{category}</h2>
      </div>
    </div>
  );
};
