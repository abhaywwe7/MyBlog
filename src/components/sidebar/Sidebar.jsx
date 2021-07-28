import React from "react";
import "./Sidebar.css";
import imageside from "./111.jpg";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={imageside} alt="" srcset="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          beatae, neque nihil eos vero delectus eius et minus tempore quam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Nature</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Animals</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
