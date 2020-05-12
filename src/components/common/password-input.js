import React from "react";
import "./style.css";

import { strengthIndicator, strengthColor } from "./strength-password";

export default function PasswordInput(props) {
  const strength = strengthIndicator(props.value);
  const color = strengthColor(strength);

  return (
    <input
      type='password'
      name={props.name}
      value={props.value}
      className='form-control'
      placeholder={props.placeholder}
      onChange={props.onChange}
      style={{
        borderColor: color
      }}
    />
  );
}
