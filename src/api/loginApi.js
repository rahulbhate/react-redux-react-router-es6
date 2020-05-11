import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
const baseUrl = process.env.API_URL + "/api/auth";

export function loginUser(user) {
  //console.log(user);
  // Axios Request
  const options = {
    url: baseUrl,
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data: JSON.stringify({ user })
  };
  return axios(options);
}
//   return fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(user)
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }
