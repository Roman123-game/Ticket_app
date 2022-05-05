import {FaIdCardAlt } from "react-icons/fa";
import "./UserInfo.modal.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <FaIdCardAlt className="imageInfo"/>
      <h4 className="user">UserInfo</h4>
      <h6>UserName:Any</h6>
      <h6>Email:Any@email.com</h6>
      <h6>Password:test1234</h6>
    </div>
  );
};

export default UserInfo;
