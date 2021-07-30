import React from "react";
import "./Setting.css";
import PP from "./circle-cropped.png";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingProfilePicture">
            <img src={PP} alt="" srcset="" />
            <label htmlFor="fileInput">
              <i className="settingProfilePictureIcon fa fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Abhay" />
          <label>Email</label>
          <input type="email" placeholder="abhaywwe7@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
