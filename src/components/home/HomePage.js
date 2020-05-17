import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../common/modal/Modal";
import ManageUserPage from "../users/ManageUserPage";
import ImageSlider from "../common/ImageSlider/ImageSlider";

const HomePage = () => {
  const [isOpen, isSetOpen] = useState(false);
  return (
    <div>
      <ImageSlider />
      {/* <button
        className='f6 link dim br1 ph3 pv2 mb2 dib white bg-light-purple'
        onClick={e => {
          isSetOpen(true);
          e.stopPropagation();
        }}
      >
        Open
      </button> */}

      {/* <Modal isOpen={isOpen} onClose={e => isSetOpen(false)}>
        <div style={{ color: "black" }}>
          <ManageUserPage />
        </div>
      </Modal> */}
    </div>
  );
};
export default HomePage;
