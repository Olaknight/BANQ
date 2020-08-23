import React from "react";
import "./index.css";
import FormLayout from "./FormLayout";

const AccountLayout = ({ children }) => {
  return (
    <div className="account__layout">
      <FormLayout>{children}</FormLayout>
    </div>
  );
};

export default AccountLayout;
