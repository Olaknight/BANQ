import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import DashBoardHeader from "./DashBoardHeader";
import "./index.css";

const HeaderBar = () => {
  return (
    <div className="header_bar">
      <div className=" column_1">
        <h1 className="logo">banq</h1>
      </div>
      <div className=" column_2">
        <Button type="link">
          <Link to="/">
            <p className="btn-white"> Home</p>
          </Link>
        </Button>
        <Button type="link">
          <Link to="/#about">
            <p className="btn-white">About Us</p>
          </Link>
        </Button>
        <Button type="link">
          <p className="btn-white">Contact Us</p>
        </Button>
        <Button type="link">
          <p className="btn-white">Blog</p>
        </Button>
      </div>
      <div className=" column_3">
        <Button type="link">
          <Link to="/login">
            <p className="btn-white">Login</p>
          </Link>
        </Button>
        <Button className="special-btn" ghost>
          <Link to="/account">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeaderBar;
export { DashBoardHeader };
