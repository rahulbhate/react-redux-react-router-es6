import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";
const baseUrlLogin = process.env.API_URL + "/login/";
console.log(baseUrl);
export function getUsers(user) {
  // fetch function get JSON Response and then returns data
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveUser(user, formData) {
  console.log(user, formData);
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user, formData)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function loginUser(user) {
  return fetch(baseUrlLogin, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
