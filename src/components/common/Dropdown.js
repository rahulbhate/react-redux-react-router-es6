import React from "react";
import PropTypes from "prop-types";

function Dropdown({
  htmlFor,
  id,
  name,
  value,
  handleChange,
  placeholder,
  options
}) {
  return (
    <div className='form-group'>
      <select
        id={id}
        name={name}
        htmlFor={htmlFor}
        value={value}
        onChange={handleChange}
        className='form-control'
      >
        <option value={placeholder} disabled selected>
          {placeholder}
        </option>
        {options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {placeholder}
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
Dropdown.propTypes = {
  /** Name of Select Component */
  name: PropTypes.string.isRequired,

  /** Select Value */
  value: PropTypes.string.isRequired,

  /** HandleChange Function */
  handleChange: PropTypes.func.isRequired
};
export default Dropdown;
