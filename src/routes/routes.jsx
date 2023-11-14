import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesIndex;
