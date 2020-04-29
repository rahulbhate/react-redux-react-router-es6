import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeStyle = { color: "#a0adff" };
  return (
    <header className='sans-serif'>
      <div
        className='cover bg-left bg-center-l'
        style={{
          backgroundImage:
            "url(" + "http://mrmrs.github.io/photos/u/011.jpg" + ")"
        }}
      >
        <div className='bg-black-80 pb5 pb6-m pb7-l'>
          <div className='dtc w2 v-mid pa3'>
            <a
              href='/'
              className='dib w2 h2 pa1 ba b--white-90 grow-large border-box'
            >
              <title>skull icon</title>
            </a>
          </div>
          <nav className='dt w-100 mw8 center'>
            <div className='dtc v-mid tr pa3'>
              <NavLink
                to='/login'
                exact
                activeStyle={activeStyle}
                className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3'
              >
                Login
              </NavLink>
              {" | "}
              <NavLink
                to='/user'
                activeStyle={activeStyle}
                className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3'
              >
                Register
              </NavLink>
              {" | "}
              <NavLink
                to='/products'
                activeStyle={activeStyle}
                className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3'
              >
                Products
              </NavLink>
              {" | "}
              <NavLink
                to='/cart'
                activeStyle={activeStyle}
                className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3'
              >
                Cart <span className='badge badge-danger'>{0}</span>
              </NavLink>
              {" | "}
              <NavLink
                to='/courses'
                activeStyle={activeStyle}
                className='f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3'
              >
                Courses
              </NavLink>
            </div>
          </nav>
          <div className='tc-l mt4 mt5-m mt6-l ph3'>
            <h1 className='f2 f1-l fw2 white-90 mb0 lh-title'>
              This is your super impressive headline
            </h1>
            <h2 className='fw1 f3 white-80 mt3 mb4'>
              Now a subheadline where explain your wonderful new startup even
              more
            </h2>
            <a
              className='f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3'
              href='/'
            >
              Call to Action
            </a>
            <span className='dib v-mid ph3 white-70 mb3'>or</span>
            <a
              className='f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3'
              href=''
            >
              Secondary call to action
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
