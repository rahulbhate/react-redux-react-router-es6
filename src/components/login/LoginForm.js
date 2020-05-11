import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import validateInput from "../../../validations/login";
import { login } from "../../redux/actions/loginActions";
import TextInput from "../common/TextInput";
import { toast } from "react-toastify";

const LoginForm = ({ login, history, ...props }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
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
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid()) return;

    setState({ errors: {} });
    setLoading(true);
    login(state)
      .then(res => {
        toast.info("User Loggedin Successfully");
        history.push("/products");
      })
      .catch(error => {
        setLoading(false);
        setError({ handleSubmit: error.message });
      });
    //   login(state).then(
    //     res => history.push("/products")
    //     //err => setState({ errors: err.data.errors, isLoading: false })
    //   );
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
      <h4>Login Page</h4>
      <form onSubmit={handleSubmit} className='measure center'>
        {error.handleSubmit && (
          <div className='alert alert-danger' role='alert'>
            {error.handleSubmit}
          </div>
        )}
        <TextInput
          name='email'
          type='email'
          label='Email'
          onChange={handleChange}
          error={errors.email}
        />

        <TextInput
          name='password'
          label='Password'
          type='password'
          onChange={handleChange}
          error={errors.password}
        />

        <button type='submit' disabled={isLoading} className='btn btn-primary'>
          {isLoading ? "Logging In..." : "Login"}
        </button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
