import validator from "validator";
import isEmpty from "lodash/isEmpty";
import isNull from "lodash/isNull";
export default function validateInput(email, password) {
  console.log(email, password);
  let errors = {};
  //let email = JSON.stringify(data.email);
  //let password = JSON.stringify(data.password);
  //   if (validator.isEmpty(email)) {
  //     errors.email = "Email is Required";
  //   }
  if (!validator.isEmail(email)) {
    errors.email = "Email is Invalid";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Password is Required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
