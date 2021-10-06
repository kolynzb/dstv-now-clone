import React from "react";

import { SignupHeader } from "./SignInScreen";
import "./styles/SignUpPage.css";
const SignUpPage = () => {
  return (
    <div className="signuppage">
      <div className="signupcontents">
        <SignupHeader />
        <SignUpContainer />
        <div className="signupcontainer"></div>
      </div>
    </div>
  );
};

export default SignUpPage;

const SignUpContainer = () => {
  return (
    <div className="signUpContainer">
      <form className="signInForm">
        <h1 className="signinTitle">Sign In</h1>
        <div className="emailInputSignIn inputt">
          <input type="email" placeholder="Email or mobile number" />
        </div>
        <div className="passwordInputSignIn inputt">
          <input type="email" placeholder="Mobile number" />
        </div>
        <div className="passwordInputSignIn inputt">
          <input type="number" placeholder="Password" />
        </div>
        <small>Minimum of 6 caharacters</small>
        <button className="signInBtn">Create An Account</button>
        <p className="signBtmPara">Forgot your email or password?</p>
        <p className="signBtmPara">
          Already have an account?
          <span className="signBtmParaLink">Sign in</span>
        </p>
      </form>
    </div>
  );
};
