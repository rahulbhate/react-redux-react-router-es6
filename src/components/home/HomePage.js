import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../common/modal/Modal";
import LoginForm from "../login/LoginForm";

const HomePage = () => {
  const [isOpen, isSetOpen] = useState(false);
  return (
    <div>
      <Link to='/'>Learn More</Link>
      <button
        className='f6 link dim br1 ph3 pv2 mb2 dib white bg-light-purple'
        onClick={e => {
          isSetOpen(true);
          e.stopPropagation();
        }}
      >
        Open
      </button>

      <Modal isOpen={isOpen} onClose={e => isSetOpen(false)}>
        <div style={{ color: "black" }}>
          <LoginForm />
        </div>
      </Modal>
    </div>
  );
};
export default HomePage;
