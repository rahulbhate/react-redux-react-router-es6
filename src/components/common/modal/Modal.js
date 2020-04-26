import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./mystyle.module.css";

const Modal = props => {
  const mystyle = {
    position: "fixed",
    zIndex: 500,
    backgroundColor: "white",
    width: "70%",
    border: "1px solid #ccc",
    boxShadow: "1px 1px 1px black",
    padding: "16px",
    left: "15%",
    top: "30%",
    boxSizing: "border-box",
    transition: "all 0.2s ease-out"
  };
  console.log(props.isOpen);
  const onClose = e => {
    props.onClose && props.onClose(e);
  };
  let dialog = (
    <div
      style={mystyle}
      className='mw6 center bg-white br7 pa3 pa3-ns mv9 ba b--black-10'
    >
      <button
        className='f6 link dim br1 ph3 pv2 mr2 mb2 dib white bg-light-purple'
        onClick={onClose}
      >
        X
      </button>
      {props.children}
    </div>
  );
  if (!props.isOpen) {
    dialog = null;
  }

  return <div>{dialog}</div>;
};

export default Modal;
