import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/style/main.css";

import AOS from "aos";
import { BrowserRouter } from "react-router-dom";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
