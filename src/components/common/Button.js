import React from "react";
import PropTypes from "prop-types";

/** Button with required field display, htmlFor, and block styling */
const Button = ({ title, type, disabled, onClick, style, className }) => {
  return (
    <button
      style={style}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
Button.propTypes = {
  /** HTML ID for associated input */
  title: PropTypes.string.isRequired,

  /** Label text */
  onClick: PropTypes.func.isRequired
};
export default Button;
