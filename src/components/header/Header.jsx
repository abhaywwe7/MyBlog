import React from "react";
import "./Header.css";
import headerimg from "./lukas-blazek-GnvurwJsKaY-unsplash.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitle1">Welcome To My</span>
        <span className="headerTitle2">Blog</span>
      </div>
      <img src={headerimg} className="headerImg" alt="" srcset="" />
    </div>
  );
}
