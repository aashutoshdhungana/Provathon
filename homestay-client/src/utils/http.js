import axios from "axios";

const axiosconfig = {
  baseURL: process.env.REACT_APP_BASE_URI,
};

export default axios.create(axiosconfig);
