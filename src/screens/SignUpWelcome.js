import React from "react";
import Navbar from "../components/Navbar";
import "./styles/SignUpWelcomepg.css";
import banner from "../assets/movie-collage.jpg";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";

const SignUpWelcome = () => {
  return (
    <div className="signupWelcome">
      <Navbar />
      <Banner />
      <BannerBottom />
      <Footer />
    </div>
  );
};

const Banner = () => {
  let history = useHistory();
  return (
    <div className="banner">
      <header
        style={{
          backgroundSize: "cover",
          height: "80vh",
          backgroundImage: `url(${banner})`,
          position: "relative",
        }}
      >
        <div className="signUp_banner__contents">
          <h1 className="bannerSignup_title">
            Watch your DStv online, anywhere*, anytime at no additional cost.
          </h1>

          <button
            className="btn signup_btn_banner"
            onClick={() => history.push("/SignUpPage")}
          >
            Sign Up
          </button>

          <h3 className="banner_paragra">
            *Available in country of subcription.Viewing requires data/internet.
          </h3>
        </div>
        <div className="overlaybanner"></div>
        <div className="overlaybanner2"></div>
      </header>
    </div>
  );
};
const BannerBottom = () => (
  <div className="bottom_banner">
    <h1 className="bottomBannerTitle"> Don't have DStv</h1>
    <p className="banner_bottom_para">
      DStv offers a wide range of packages to suit you and your whole family's
      viewing needs.Discover the best local and international blockbusters,
      must-see TV shows, kids' entertainment and sport to keep you glued to your
      screen.
    </p>
    <button className="bottom_btn btn">Get DStv</button>
  </div>
);
export default SignUpWelcome;
