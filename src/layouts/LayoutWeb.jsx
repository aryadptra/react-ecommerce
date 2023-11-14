import React from "react";
import Navbar from "../components/web/CustomNavbar";

function LayoutWeb({ children }) {
  return (
    <>
      <Navbar />
      <div className="page-content page-home">{children}</div>
    </>
  );
}

export default LayoutWeb;
