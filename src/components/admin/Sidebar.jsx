import React from "react";
import Logo from "../../assets/images/dashboard-store-logo.svg";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div className="border-right" id="sidebar-wrapper">
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
      </div>
    </>
  );
};

export default Sidebar;
