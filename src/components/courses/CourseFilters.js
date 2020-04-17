import React from "react";
import { connect } from "react-redux";
import DropDown from "../common/Dropdown";
import Label from "../common/Label";
import TextInput from "../common/TextInput";
import { filterText, sortBy } from "../../redux/actions/filters";
const arrays = ["title", "category"];
const CourseFilters = props => (
  <div style={{ marginBottom: 15 }}>
    <TextInput
      htmlId='example-optional'
      label='Search By Course Title and Course Category'
      placeholder='Search...'
      name='search'
      onChange={e => {
        props.dispatch(filterText(e.target.value));
      }}
    />
    <Label htmlFor='test' label='SORT BY' />
    <DropDown
      id='mySelection'
      name='courses'
      htmlFor='courses'
      placeholder='SORT BY'
      options={arrays}
      handleChange={e => props.dispatch(sortBy(e.target.value))}
      className='form-control'
    ></DropDown>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(CourseFilters);
