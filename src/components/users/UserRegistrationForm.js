import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const UserRegistrationForm = ({
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <>
      <h4>Signup Page</h4>
      <form onSubmit={onSave} className='measure center'>
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

        <button
          type='submit'
          disabled={saving}
          className='f6 link dim br3 ph5 pv2 mb4 dib white bg-purple'
        >
          {saving ? "Signing up..." : "Signup"}
        </button>
      </form>
    </>
  );
};

UserRegistrationForm.propTypes = {
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default UserRegistrationForm;
