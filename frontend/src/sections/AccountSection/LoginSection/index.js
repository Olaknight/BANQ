import React from "react";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";

const LoginSection = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");

  const history = useHistory();

  function routeto(e) {
    history.push("/dashboard");
  }
  function routeto2() {
    history.push("/account");
  }
  function routetoPassword() {
    history.push("/forgot_password");
  }
  return (
    <>
      <div>
        <h1 className="logo">banq</h1>
      </div>
      <div>
        <p className="welcome">Welcome Back</p>
      </div>
      <div>
        <p className="welcome__text">Openess first</p>
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
          <span className="forgot__password" onClick={routetoPassword}>
            Forgot Password?{" "}
          </span>
        </div>
        <div>
          <Button
            id="login_input__button"
            className="login_input "
            type="primary"
            onClick={routeto}
            ghost
          >
            Sign In
          </Button>
          <span className="not_registered">Don't Have An Account?</span>
          <span className="text__sign_up" onClick={routeto2}>
            Sign Up
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginSection;
