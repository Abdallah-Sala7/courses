import { useDispatch } from "react-redux";

import {
  Extension,
  ImportContacts,
  Logout,
  Settings,
} from "@mui/icons-material";

import "./style.css";
import { setAsideTap } from "../../store/reducers/appSlice";
import { NavLink } from "react-router-dom";

const ProfileSide = () => {
  const dispatch = useDispatch();

  const handleAside = (tap) => {
    dispatch(setAsideTap(tap));
  };

  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div>
      <ul className="profile-list">
        <li className="profile-list-item">
          <NavLink
            to={'/profile'}
            end
            onClick={() => handleAside("courses")}
          >
            <ImportContacts />

            <span>courses</span>
          </NavLink>
        </li>

        <li className="profile-list-item">
          <NavLink
            to={'quizzes'}
            onClick={()=> handleAside("quizzes")}
          >
            <Extension />

            <span>quizzes</span>
          </NavLink>
        </li>

        <li className="profile-list-item">
          <NavLink
            to={'settings'}
            onClick={()=>handleAside("settings")}
          >
            <Settings />

            <span>settings</span>
          </NavLink>
        </li>

        <li className="profile-list-item">
          <NavLink
            to={'/auth'}
            onClick={handleLogout}
          >
            <Logout />

            <span>logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSide;
