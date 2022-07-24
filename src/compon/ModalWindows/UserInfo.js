import {FaIdCardAlt } from "react-icons/fa";
import "./UserInfo.modal.css";
import {memo} from "react";


const UserInfo = () => {
  return (
    <div className="userInfo">
      <FaIdCardAlt className="imageInfo"/>
      <h2 className="user">UserInfo</h2>
      <h4>UserName:Any</h4>
      <h4>Email:any@email.com</h4>
      <h4>Password:test1234</h4>
    </div>
  );
};

export default memo(UserInfo);
