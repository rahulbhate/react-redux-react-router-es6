import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + "https://i.giphy.com/5lF3pQpdquCBy.gif" + ")"
      }}
      className='tc-l bg-center cover bg-black'
    >
      <div className='w-100 ph3 pv5 bg-black-80'>
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
    </div>
  );
};
export default Footer;
