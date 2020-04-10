import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeStyle = { color: "#fa6817" };
  return (
    <nav>
      <NavLink to='/' exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to='/about' activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to='/addcourse' activeStyle={activeStyle}>
        Course
      </NavLink>
      {" | "}
      <NavLink to='/courses' activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
