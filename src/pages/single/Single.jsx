import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlepost/SinglePost";
import "./Single.css";
export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
