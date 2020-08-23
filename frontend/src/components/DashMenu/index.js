import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const DashMenu = ({ linkList }) => {
  return linkList.map(({ name, iconUrl, slug }, index) => {
    return (
      <div className="menu__list" key={index}>
        <DashMenuItem name={name} iconUrl={iconUrl} slug={slug} />
      </div>
    );
  });
};

const DashMenuItem = ({ name, iconUrl, slug }) => {
  return (
    <div className="dash__item">
      <img src={iconUrl} alt={`${name} menu icon`} className="icon__dash" />
      <Link to={slug}>
        <p id="p__dash">{name}</p>
      </Link>
    </div>
  );
};

export default DashMenuItem;
export { DashMenu };
