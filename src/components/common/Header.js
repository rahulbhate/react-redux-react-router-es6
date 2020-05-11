import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
import PropTypes from "prop-types";
const Header = ({ logout, auth, cart, props }) => {
  const handleLogout = e => {
    e.preventDefault();
    logout();
  };

  const userLinks = (
    <>
      <NavLink
        to='/login'
        exact
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
      >
        Login
      </NavLink>
      {" | "}
      <NavLink
        to='/user'
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
      >
        Register
      </NavLink>
      {" | "}
    </>
  );
  const guestLinks = (
    <>
      <NavLink
        to='/'
        exact
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
      >
        About
      </NavLink>
      {" | "}

      <NavLink
        to='/products'
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
      >
        Products
      </NavLink>
      {" | "}
      <NavLink
        to='/cart'
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
      >
        Cart <span className='badge badge-danger'>{cart.length}</span>
      </NavLink>
      {" | "}
      <NavLink
        to='/courses'
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
      >
        Courses
      </NavLink>
      {" | "}
      <NavLink
        to='/'
        onClick={handleLogout}
        className='f6 fw4 hover-black no-underline black-70 dn dib-ns pv2 ph3'
      >
        Logout
      </NavLink>
    </>
  );
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>Red Dice</div>
        <nav className='dt w-100 mw8 center'>
          <div className='dtc v-mid tr pa3'>
            {auth.isAuthenticated ? guestLinks : userLinks}
          </div>
        </nav>
        <div className='collapse navbar-collapse'>This is NavBar</div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  auth: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return { auth: state.auth, cart: state.cart };
};
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
