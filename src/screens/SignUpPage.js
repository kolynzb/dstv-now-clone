import React from "react";
import { SignupHeader } from "./SignInScreen";
import "./styles/SignUpPage.css";
const SignUpPage = () => {
  return (
    <div className="signuppage">
      <div className="signupcontents">
        <SignupHeader />
        <div className="signupcontainer"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
