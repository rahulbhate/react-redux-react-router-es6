import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import validateInput from "../../../validations/login";
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";
import { toast } from "react-toastify";

const ContactForm = ({ history, ...props }) => {
  const [state, setState] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
    console.log(state);
  }
  function handleSubmit(event) {
    event.preventDefault();
    //Client side Validations...
    if (!formIsValid()) return;
    setState({ errors: {} });
    setSaving(true);
  }
  function formIsValid() {
    const { fullName, subject, email, message } = state;
    const errors = {};

    if (!fullName) errors.fullName = "Full Name is required.";
    if (!subject) errors.subject = "Subject is required";
    if (!email) errors.email = "Email is required.";
    if (!message) errors.message = "Message is required";
    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  return (
    <>
      <h4>Contact Us Page</h4>
      <form onSubmit={handleSubmit} className='measure center'>
        {errors.handleSubmit && (
          <div className='alert alert-danger' role='alert'>
            {errors.handleSubmit}
          </div>
        )}
        <TextInput
          name='fullName'
          type='text'
          label='Full Name'
          onChange={handleChange}
          error={errors.fullName}
        />

        <TextInput
          name='email'
          type='email'
          label='Email'
          onChange={handleChange}
          error={errors.email}
        />
        <TextInput
          name='subject'
          type='text'
          label='Subject'
          onChange={handleChange}
          error={errors.subject}
        />
        <TextArea
          name='message'
          type='textarea'
          label='Message'
          rows={5}
          cols={20}
          onChange={handleChange}
          error={errors.message}
        />

        <button
          type='submit'
          disabled={saving}
          className='f6 link dim br3 ph5 pv2 mb4 dib white bg-purple'
        >
          {saving ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  history: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
