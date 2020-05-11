import React from "react";

const Footer = () => {
  return (
    <div
      className='w-100 ph3 pv3 bg-black-80'
      style={{ position: "fixed", bottom: 0 }}
    >
      <h3 className='white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2'>
        <span className='f6 ml3 pr2'>Instagram</span>
      </h3>
      <h3 className='white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2'>
        <span className='f6 ml3 pr2'>Facebook</span>
      </h3>
      <h3 className='white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2'>
        <span className='f6 ml3 pr2'>LinkedIn</span>
      </h3>
      <h3 className='white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2'>
        <span className='f6 ml3 pr2'>Twitter</span>
      </h3>
      <h3 className='white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2'>
        <span className='f6 ml3 pr2'>Youtube</span>
      </h3>
    </div>
  );
};
export default Footer;
