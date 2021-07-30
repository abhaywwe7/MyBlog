import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import p1 from "./Write-with-eduvoice.jpg";
export default function Register() {
  return (
    <div className="registerbox">
      <h1>Register</h1>
      <div className="textbox">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="textbox">
        <i className="fas fa-mail-bulk"></i>
        <input type="text" placeholder="Enter your email" />
      </div>
      <div className="textbox">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>
      <input type="button" className="btn" value="Register" />
      <button className="registerbutton">
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          Login
        </Link>
      </button>
    </div>
  );
}
