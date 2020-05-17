import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

const baseUrl = process.env.API_URL + "/checkout/";

export function checkout(data) {
  // Axios Request
  const options = {
    url: baseUrl,
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data: JSON.stringify({ data })
  };
  return axios(options);
}
