import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  rows,
  cols,
  error
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <textarea
          name={name}
          className='form-control'
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          value={value}
          onChange={onChange}
        />
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  error: PropTypes.string
};

export default TextArea;
