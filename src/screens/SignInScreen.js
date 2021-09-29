import React from "react";
import "./styles/SignInScreen.css";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { Link } from "react-router-dom";
const SignInScreen = () => {
  return (
    <div className="SignInScreen">
      <SignupHeader />
      <SignIn />

      <p className="bottomTEXT">
        This site is protected by reCAPTCHA and the Google
        <b>
          <u> Privacy Policy</u>
        </b>
        and
        <b>
          <u> Terms of Service </u>
        </b>
        apply.
      </p>
    </div>
  );
};

const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <form className="signInForm">
      <h1 className="signinTitle">Sign In</h1>
      <div className="emailInputSignIn inputt">
        <input type="email" placeholder="Email or mobile number" />
      </div>
      <div className="passwordInputSignIn inputt">
        <input type="email" placeholder="Password" />
      </div>
      <button className="signInBtn" onClick={() => dispatch(login())}>
        Sign in
      </button>
      <p className="signBtmPara">
        Forgot your email or password?
        <span className="signBtmParaLink">Reset</span>
      </p>
      <p className="signBtmPara">
        Dont have an account?
        <span className="signBtmParaLink">Sign Up Now</span>
      </p>
    </form>
  );
};

export const SignupHeader = () => {
  return (
    <Link to="/">
      <header className="signinHeader">
        <img
          className="logoSignIn"
          src="https://now.dstv.com/static/media/logo_dstv.e9762ba5.svg"
          alt="logo"
          width="120px"
        />
        <p
          style={{
            color: "white",
            fontSize: "0.6rem",
            fontWeight: "300",
          }}
        >
          part of the <b>MultiChoice</b> group
        </p>
      </header>
    </Link>
  );
};

export default SignInScreen;
