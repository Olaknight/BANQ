import React from "react";
import SubSectionLayout from "./SubSectionLayout";
import "./index.css";

const SectionLayout = ({ children, classname }) => {
  return <div className={`section_layout ${classname}`}>{children}</div>;
};

export default SectionLayout;
export { SubSectionLayout };
