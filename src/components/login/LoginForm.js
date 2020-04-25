import React from "react";

const LoginForm = () => {
  return (
    <>
      <main className='pa4 black-80'>
        <form className='measure center'>
          <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
            <legend className='f4 fw6 ph0 mh0'>Sign In</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                Email
              </label>
              <input
                className='pa2 input-reset ba bg-transparent w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='password'>
                Password
              </label>
              <input
                className='b pa2 input-reset ba bg-transparent w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
            <label className='pa0 ma0 lh-copy f6 pointer'>
              <input type='checkbox' /> Remember me
            </label>
          </fieldset>
          <div className=''>
            <input
              className='f6 link dim br1 ph3 pv2 mb2 dib white bg-light-purple'
              type='submit'
              value='Sign in'
            />
          </div>
          <div className='lh-copy mt3'>
            <a href='#0' className='f6 link dim black db'>
              Sign up
            </a>
            <a href='#0' className='f6 link dim black db'>
              Forgot your password?
            </a>
          </div>
        </form>
      </main>
    </>
  );
};
export default LoginForm;
