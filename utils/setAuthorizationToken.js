import axios from "axios";

export default function setAuthorizationToken(token) {
  if (token) {
    console.log(axios.defaults.headers.common);
    axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
