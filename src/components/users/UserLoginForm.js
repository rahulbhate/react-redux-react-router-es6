import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const UserLoginForm = ({ onLogin, onChange, saving = false, errors = {} }) => {
  return (
    <form onSubmit={onLogin} className='measure center'>
      {errors.onSave && (
        <div className='alert alert-danger' role='alert'>
          {errors.onSave}
        </div>
      )}
      <TextInput
        name='email'
        type='email'
        label='Email'
        onChange={onChange}
        error={errors.email}
      />

      <TextInput
        name='password'
        label='Password'
        type='password'
        onChange={onChange}
        error={errors.password}
      />

      <button type='submit' disabled={saving} className='btn btn-primary'>
        {saving ? "Logging In..." : "Login"}
      </button>
    </form>
  );
};

UserLoginForm.propTypes = {
  errors: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default UserLoginForm;
