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
    message: "",
    errors: {}
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({});
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
    if (!isValid()) return;
    // setState({ errors: {} });
    // setLoading(true);
  }
  function isValid() {
    const { errors, isValid } = validateInput(state.email, state.password);
    if (!isValid) {
      setState({ errors });
    }
    return isValid;
  }

  const { errors } = state;

  return (
    <>
      <h4>Contact Us Page</h4>
      <form onSubmit={handleSubmit} className='measure center'>
        {error.handleSubmit && (
          <div className='alert alert-danger' role='alert'>
            {error.handleSubmit}
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
          disabled={isLoading}
          className='f6 link dim br3 ph5 pv2 mb4 dib white bg-purple'
        >
          {isLoading ? "Loading..." : "Contact"}
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
