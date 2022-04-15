import React from "react";
import "./Navbar.css";
// import image1 from "./circle-cropped.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
  };
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
          <li className="navListItems">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              HOME
            </Link>
          </li>
          <li className="navListItems">
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              ABOUT
            </Link>
          </li>
          <li className="navListItems">
            {" "}
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              CONTACT
            </Link>
          </li>
          <li className="navListItems">
            {" "}
            <Link
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          <li className="navListItems" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/setting">
            <img
              className="navImg"
              src={publicFolder + user.profilePic}
              alt=""
              srcset=""
            />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItems">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGIN
              </Link>
            </li>
            <li className="navListItems">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i class="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
