import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes.jsx";

// Administrator Pages
import Dashboard from "../pages/admin/Dashboard.jsx";
// Web Pages
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";

function RoutesIndex() {
  return (
    <Routes>
      {/* Route to Administrator Page */}
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesIndex;
