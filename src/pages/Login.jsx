import React, { useState, useEffect } from "react";
import Api from "../api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/web/CustomNavbar";
import LoginPlaceholder from "../assets/images/login-placeholder.png";

const Login = () => {
  document.title = "Login - Makayastore";

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [validation, setValidation] = useState({});

  useEffect(() => {
    // Check if token exists in cookies
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await Api.post("/api/login", {
        email: email,
        password: password,
      });

      setLoading(false);
      toast.success("Login Successfully.", {
        duration: 4000,
        position: "top-right",
      });
      Cookies.set("token", response.data.token);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setValidation(error.response?.data || {});
    }
  };

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
                <form className="mt-3" onSubmit={loginHandler}>
                  {validation.message && (
                    <div className="alert alert-danger w-75">
                      {validation.message}
                    </div>
                  )}
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control w-75"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                    />
                    {validation.email && (
                      <div className="alert alert-danger mt-2 w-75">
                        {validation.email[0]}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control w-75"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />

                    {validation.password && (
                      <div className="alert alert-danger mt-2 w-75">
                        {validation.password[0]}
                      </div>
                    )}
                  </div>
                  <button
                    className="btn btn-success btn-block w-75 mt-4"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Sign In to My Account"}
                  </button>
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
