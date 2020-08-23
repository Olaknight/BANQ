import React from "react";
import { Select } from "antd";
import { useHistory } from "react-router-dom";
import LoginSection from "./LoginSection";
import "./index.css";

const { Option } = Select;
const AccountSection = () => {
  const history = useHistory();
  function handleChange(value) {
    console.log(`selected ${value}`);
    if (value === "Individual" || value === "Others")
      history.push({
        pathname: "/register",
        state: { value },
      });
    else
      history.push({
        pathname: "/register",
        state: { value },
      });
  }
  return (
    <>
      <div>
        <h1 className="logo">banq</h1>
      </div>
      <div>
        <p className="category">Choose Category</p>
      </div>
      <div>
        <p className="identity">I am a...</p>
      </div>
      <div className="select__box">
        <Select
          placeholder="Choose Category"
          className="select"
          onChange={handleChange}
          autoFocus
          size="large"
          dropdownClassName="drop__downstyle"
        >
          <Option className="option__select" value="Individual">
            Individual
          </Option>
          <Option className="option__select" value="Non Goverment Organization">
            Non Goverment Organization
          </Option>
          <Option className="option__select" value="Goverment Organization">
            Goverment Organization
          </Option>

          <Option className="option__select" value="Others">
            Others
          </Option>
        </Select>
      </div>
    </>
  );
};

export default AccountSection;
export { LoginSection };
