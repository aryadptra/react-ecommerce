import React from "react";
import Navbar from "../components/web/Navbar";
import LoginPlaceholder from "../assets/images/login-placeholder.png";
import InputField from "../components/web/Molecules/InputField";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="page-content page-auth">
        <div className="section-store-auth" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center row-login">
              <div className="col-lg-6 text-center">
                <img
                  src={LoginPlaceholder}
                  alt=""
                  className="w-50 mb-4 mb-lg-none"
                />
              </div>
              <div className="col-lg-5">
                <h2>
                  Belanja kebutuhan utama, <br />
                  menjadi lebih mudah
                </h2>
                <form className="mt-3">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control w-75"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control w-75" />
                  </div>
                  <a
                    className="btn btn-success btn-block w-75 mt-4"
                    href="/login.html"
                  >
                    Sign In to My Account
                  </a>
                  <a className="btn btn-signup w-75 mt-2" href="/register.html">
                    Sign Up
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
