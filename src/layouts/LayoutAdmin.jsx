import React, { useEffect } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import NavbarAdmin from "../components/admin/NavbarAdmin";

function LayoutAdmin({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in cookies
    const token = Cookies.get("token");
    if (!token) {
      toast.error("You are not Administrator!", {
        duration: 4000,
        position: "top-right",
      });
      navigate("/");
    }
  });
  return (
    <div className="page-dashboard">
      <div className="d-flex" id="wrapper">
        <Sidebar />
        {/* /#sidebar-wrapper */}
        <div id="page-content-wrapper">
          <NavbarAdmin />
          <div
            className="section-content section-dashboard-home"
            data-aos="fade-up"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
