import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

export {
  httpRequest
}