import React from "react";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";

const SignUpSection = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const history = useHistory();

  function routeto(e) {
    history.push("/login");
  }
  function routeto2() {
    history.push("/login");
  }

  return (
    <>
      <div>
        <h1 className="logo">banq</h1>
      </div>
      <div>
        <p className="welcome">Welcome </p>
      </div>
      <div>
        <p className="welcome__text">Come and Join us</p>
      </div>
      <div className="input__box">
        <div>
          <Input
            className="login_input"
            value={emailValue}
            placeholder="Email "
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div>
          <Input
            className="login_input"
            value={passwordValue}
            placeholder="Password"
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
          />
        </div>
        <div>
          <Button
            id="login_input__button"
            className="login_input "
            type="primary"
            onClick={routeto}
            ghost
          >
            Sign Up
          </Button>
          <span className="not_registered">Have An Account?</span>
          <span className="text__sign_up" onClick={routeto2}>
            Sign in
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUpSection;
