import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../redux/actions/userActions";
import UserLoginForm from "./UserLoginForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { newUser } from "../../../tools/mockData";
const ManageUserLoginPage = ({ users, loginUser, history, ...props }) => {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    console.log("Use Effect Hook Called");
  }, []);
  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
    console.log(user);
  }
  function formIsValid() {
    const { email, password } = user;
    const errors = {};

    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave() {
    event.preventDefault();
    //Client side Validations...
    if (!formIsValid()) return;
    setSaving(true);
    loginUser(user)
      .then(() => {
        toast.info("User Loggedin Successfully");
        history.push("/courses");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  return (
    <main className='pa4 black-80'>
      <UserLoginForm
        user={user}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </main>
  );
};

const mapStateToProps = state => {
  return {
    user: newUser
  };
};
const mapDispatchToProps = { loginUser };
ManageUserLoginPage.propTypes = {
  history: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageUserLoginPage);
