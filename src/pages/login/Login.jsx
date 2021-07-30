import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  return (
    <div className="loginbox">
      <h1>Login</h1>
      <div className="textbox">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="textbox">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <input type="button" className="btn" value="Sign in" />
      <button className="loginregisterbutton">
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Register
        </Link>
      </button>
    </div>
  );
}
