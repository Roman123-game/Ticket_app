import { FaUserCircle } from "react-icons/fa";
import "./UserInfo.modal.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <FaUserCircle className="imageInfo"/>
      <div>UserInfo:</div>
      <div>UserName:Any</div>
      <div>Email:Any@email.com</div>
      <div>Password:test1234</div>
    </div>
  );
};

export default UserInfo;