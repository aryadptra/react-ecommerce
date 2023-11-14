import React from "react";
import Sidebar from "../components/admin/Sidebar";
import NavbarAdmin from "../components/admin/NavbarAdmin";

import Logo from "../assets/images/dashboard-store-logo.svg";

function LayoutAdmin({ children }) {
  return (
    <div className="page-dashboard">
      <div className="d-flex" id="wrapper">
        <Sidebar />
        {/* <div className="border-right" id="sidebar-wrapper">
          <div className="sidebar-heading text-center">
            <img src={Logo} alt="" className="my-4" />
          </div>
          <div className="list-group list-group-flush">
            <a
              href="/dashboard.html"
              className="list-group-item list-group-item-action active"
            >
              Dashboard
            </a>
            <a
              href="/dashboard-products.html"
              className="list-group-item list-group-item-action"
            >
              My Products
            </a>
            <a
              href="/dashboard-transactions.html"
              className="list-group-item list-group-item-action"
            >
              Transactions
            </a>
            <a
              href="/dashboard-settings.html"
              className="list-group-item list-group-item-action"
            >
              Store Settings
            </a>
            <a
              href="/dashboard-account.html"
              className="list-group-item list-group-item-action"
            >
              My Account
            </a>
          </div>
        </div> */}

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
