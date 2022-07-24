import {FaIdCardAlt } from "react-icons/fa";
import "./UserInfo.modal.css";
import React from "react";


const UserInfo = React.memo(() => {
  return (
    <div className="userInfo">
      <FaIdCardAlt className="imageInfo"/>
      <h2 className="user">UserInfo</h2>
      <h4>UserName:Any</h4>
      <h4>Email:any@email.com</h4>
      <h4>Password:test1234</h4>
    </div>
  );
});

export default UserInfo;
