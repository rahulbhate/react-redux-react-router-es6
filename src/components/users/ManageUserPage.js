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
    // if (!formIsValid()) return;
    setSaving(true);
    saveUser(user)
      .then(() => {
        toast.info("User Registered Successfully");
        history.push("/courses");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }
  return (
    <main className='pa4 black-80'>
      <UserRegistrationForm
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
const mapDispatchToProps = { saveUser };
ManageUserPage.propTypes = {
  history: PropTypes.object.isRequired,
  saveUser: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
