import React from "react";
import LoginForm from "./LoginForm";
const LoginPage = ({ history }) => (
  <div className='mw6 center bg-white br3 pa3 pa5-ns mv5 ba b--black-7'>
    <LoginForm history={history} />
  </div>
);

export default LoginPage;
