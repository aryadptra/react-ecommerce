import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

// Set global Axios defaults
axios.defaults.baseURL = import.meta.env.VITE_APP_BASEURL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

// Create instance
const Api = axios.create();

// Intercept response to handle errors
Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      Cookies.remove("token");
      // Use history.push for navigation
      navigate("/login");
    }
    return Promise.reject(error);
  }
);

export default Api;
