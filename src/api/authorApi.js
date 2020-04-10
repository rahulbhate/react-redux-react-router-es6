import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";
console.log(baseUrl);
export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
