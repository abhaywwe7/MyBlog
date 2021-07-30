import React from "react";
import "./Register.css";
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
      <button className="registerbutton">Login</button>
    </div>
  );
}
