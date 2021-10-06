import React, { useRef } from "react";
import "./styles/SignInScreen.css";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
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
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const register = () => {
    auth
      .createUserWithEmailAndPassword(
        userEmail.current.value,
        userPassword.current.value
      )
      .then((user) => dispatch(login(user)))
      .catch((err) => console.log(err.message));
  };
  return (
    <form className="signInForm">
      <h1 className="signinTitle">Sign In</h1>
      <div className="emailInputSignIn inputt">
        <input
          ref={userEmail}
          type="email"
          placeholder="Email or mobile number"
        />
      </div>
      <div className="passwordInputSignIn inputt">
        <input ref={userPassword} type="email" placeholder="Password" />
      </div>
      <Link to="/">
        <button className="signInBtn" onClick={register}>
          Sign in
        </button>
      </Link>
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
    <header className="signinHeader">
      <Link to="/">
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
      </Link>
    </header>
  );
};

export default SignInScreen;
