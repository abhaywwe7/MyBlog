import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import axios from "axios";
import imageside from "./111.jpg";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [catt, setCatt] = useState([]);
  useEffect(() => {
    const fetchCatt = async () => {
      const res = await axios.get("/categories");
      setCatt(res.data);
    };
    fetchCatt();
  }, []);
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
          {catt.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
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
