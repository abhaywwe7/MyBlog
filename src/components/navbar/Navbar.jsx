import React from "react";
import "./Navbar.css";
import image1 from "./circle-cropped.png";
export default function Navbar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-linkedin"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItems">HOME</li>
          <li className="navListItems">ABOUT</li>
          <li className="navListItems">CONTACT</li>
          <li className="navListItems">POST</li>
          <li className="navListItems">LOGOUT</li>
        </ul>
      </div>
      <div className="navRight">
        <img className="navImg" src={image1} alt="" srcset="" />
        <i class="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
