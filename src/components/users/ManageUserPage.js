import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes, { number } from "prop-types";
import { saveUser } from "../../redux/actions/userActions";
import UserRegistrationForm from "./UserRegistrationForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { newUser } from "../../../tools/mockData";
const ManageUserPage = ({ users, saveUser, history, ...props }) => {
  const [user, setUser] = useState({ ...props.user });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    console.log("Use Effect Hook Called");
  }, []);

  function handleChange(event) {
    //#############APPEND FILE AND USER OBJECT..............##################
    //     let formData = new FormData();
    // formData.append("file", myfile);
    // formData.append("myjson", JSON.stringify(myJsonObject));
    //POST it using Content-Type: multipart/form-data

    //#################################################################
    // const { name, value } = event.target;
    // const { profileImage } = user;
    // const { name, value } = event.target;
    // setUser(prevUser => ({
    //   ...prevUser,
    //   [name]: value
    // }));
    // // setUser({ [event.target.name]: event.target.value });

    event.persist();
    const formData = new FormData();
    formData.append("file", file);
    switch (event.target.name) {
      // Updated this
      case "file":
        if (event.target.files.length > 0) {
          // Accessed .name from file
          setUser(prevUser => ({
            ...prevUser,
            profileImage: event.target.files[0].name
          }));
          setFile(event.target.files[0]);
          formData.append("user", JSON.stringify(user));
        }
        break;
      default:
        setUser(prevUser => ({
          ...prevUser,
          [event.target.name]: event.target.value
        }));
    }
    console.log(user, file);
  }
  function formIsValid() {
    const { email, password, profileImage } = user;
    const errors = {};

    if (!user.email) errors.email = "Email is required.";
    if (!user.password) errors.password = "Password is required";
    if (!user.profileImage) errors.file = "Profile Picture is required";
    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave() {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    //Client side Validations...
    if (!formIsValid()) return;
    setSaving(true);
    saveUser(user, formData)
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
