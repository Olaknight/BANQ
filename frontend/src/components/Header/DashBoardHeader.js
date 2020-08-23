import React from "react";
import "./index.css";
import { useLocation } from "react-router";
const DashBoardHeader = () => {
  let { pathname } = useLocation();
  return (
    <div className="dashboard__header">
      <div className="dot"></div>
      <div className="title">
        <h1 className="title__text">{pathname.substr(1)}</h1>
      </div>
      <div className="account__icon">
        <img
          src="/images/userprofile.svg"
          alt="user profile icon"
          className="user__profile_icon"
        />
      </div>
    </div>
  );
};

export default DashBoardHeader;
