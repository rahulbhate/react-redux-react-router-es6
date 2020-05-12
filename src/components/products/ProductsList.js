import React from "react";
import PropTypes from "prop-types";

import CourseFilters from "../courses/CourseFilters";
const ProductsList = ({ courses, onSave }) => {
  return (
    <>
      <main className='pa3 pa3-ns flex flex-wrap'>
        <div className='fl w-100 bg-near-white tc'>
          <CourseFilters />
        </div>
        {courses.map(course => (
          <Product key={course.id} {...course} onSave={onSave} />
        ))}
      </main>
    </>
  );
};

ProductsList.propTypes = {
  courses: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ProductsList;

const Product = props => {
  const {
    id,
    title,
    category,
    authorName,
    picture,
    price,
    units = 1,
    onSave
  } = props;
  return (
    <div
      className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'
      key={id}
    >
      <div className='tc'>
        <img
          src={picture}
          className='br-100 h4 w4 dib ba b--black-05 pa2'
          title='Photo of a kitty staring at you'
        />
        <h1 className='f6 mb2'>{title}</h1>
        <h2 className='f5 fw4 gray mt0'>{authorName}</h2>
        <h2 className='f5 fw4 gray mt0'>{category}</h2>
        <h2 className='f5 fw4 light-purple mt0'>AUD ${price}</h2>
        <h2 className='f5 fw4 light-purple mt0'>Quantity:{units}</h2>
        <button
          className='f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple'
          onClick={() =>
            onSave({
              id,
              title,
              category,
              authorName,
              picture,
              price,
              units: 1
            })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
