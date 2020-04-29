import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/users/";
console.log(baseUrl);
export function getUsers(user) {
  // fetch function get JSON Response and then returns data
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(handleResponse)
    .catch(handleError);
}
