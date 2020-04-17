import React from "react";
import { connect } from "react-redux";
import { filterText, sortBy } from "../../redux/actions/filters";

const CourseFilters = props => (
  <div style={{ marginBottom: 15 }}>
    <input
      type='text'
      placeholder='Start search by typing title'
      value={props.filters.text}
      onChange={e => {
        props.dispatch(filterText(e.target.value));
      }}
    ></input>
    <select onChange={e => props.dispatch(sortBy(e.target.value))}>
      <option value='N/A'>Sort Type</option>
      <option value='title'>Title</option>
      <option value='category'>Category</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(CourseFilters);
