import React from "react";
import "./index.css";
import { SectionLayout, SubSectionLayout } from "../../../Layouts";
import { Input, Button } from "antd";

const EmailSection = () => {
  const [emailValue, setEmailValue] = React.useState("");
  return (
    <SectionLayout classname="email_box">
      <SubSectionLayout>
        <div>
          <h2 className="email_heading">Want to hear from us?</h2>
        </div>
        <div>
          <p className="email_paragraph">
            Sign up for our email newsletter an get up to date information at
            your disposal
          </p>
        </div>
      </SubSectionLayout>
      <SubSectionLayout row>
        <Input
          className="subcribe_input"
          value={emailValue}
          placeholder="Enter valid email address"
          onChange={(e) => setEmailValue(e.target.value)}
        />

        <Button
          type="primary"
          className="btn-email"
          size="large"
          onClick={() => alert(emailValue)}
        >
          Submit
        </Button>
      </SubSectionLayout>
    </SectionLayout>
  );
};

export default EmailSection;
