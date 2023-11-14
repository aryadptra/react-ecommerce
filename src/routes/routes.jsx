import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login.jsx";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RoutesIndex;
