import React from "react";
import "./index.css";

const SubSectionLayout = ({ children, row }) => {
  return (
    <div className={row ? "sub__section_row " : "sub__section_layout"}>
      {children}
    </div>
  );
};

export default SubSectionLayout;
