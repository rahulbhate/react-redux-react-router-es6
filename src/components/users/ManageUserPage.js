import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveUser } from "../../redux/actions/userActions";
import UserRegistrationForm from "./UserRegistrationForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { newUser } from "../../../tools/mockData";
const ManageUserPage = ({ users, saveUser, history, ...props }) => {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    console.log("Use Effect Hook Called");
  }, []);
  function handleChange(event) {
    // const { name, value } = event.target;
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
    // setUser({ [event.target.name]: event.target.value });
    console.log(user);
  }
  function formIsValid() {
    const { email, password } = user;
    const errors = {};

    if (!user.email) errors.email = "Email is required.";
    if (!user.password) errors.password = "Password is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave() {
    event.preventDefault();
    //Client side Validations...
    if (!formIsValid()) return;
    setSaving(true);
    saveUser(user)
      .then(() => {
        toast.info("User Registered Successfully");
        history.push("/login");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  return (
    <div className='mw6 center bg-white br3 pa3 pa5-ns mv5 ba b--black-8'>
      <UserRegistrationForm
        user={user}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: newUser
  };
};
const mapDispatchToProps = { saveUser };
ManageUserPage.propTypes = {
  history: PropTypes.object.isRequired,
  saveUser: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
