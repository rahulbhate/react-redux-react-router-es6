import React from 'react';

const Button = (props) => {
  return (
    <button
      style={props.style}
      className={
        props.type === 'primary' ? 'btn btn-danger' : 'btn btn-secondary'
      }
      {...props}
    >
      {props.title}
    </button>
  );
};

export default Button;
