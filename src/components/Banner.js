import React from "react";
import "./styles/Banner.css";
import flashbanner from "../assets/flash-banner.jpg";
const Banner = () => {
  return (
    <div className="container">
      <header
        style={{
          backgroundSize: "cover",
          height: "90vh",
          backgroundImage: `url(${flashbanner})`,

          position: "relative",
        }}
      >
        <div className="banner_contents">
          <img
            src="https://rndcdn.dstv.com/dstvcms/2018/05/30/Mnet_City_Logo_Dark_Background_4_3_001_med.png"
            alt="channel"
            width="70px"
            className="banner_channel_logo"
          />
          <h1 className="banner_title">The Flash</h1>
          <h2 className="banner__category">ACTION | AVENTURE | HORROR</h2>
          <p className="banner_synopsis">
            In the season seven premiere, an experiment to save barry's speed
            backfires,and Nash Wells searches for a way to save The Flash,
            coming up with a dangerous plan.
          </p>
          <div className="banner_buttons">
            <button className="watch_button_banner">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path>
              </svg>
              Watch
            </button>
            <div className="info_btn_banner">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"></path>
                <circle cx="8" cy="4.5" r="1"></circle>
              </svg>
            </div>

            <div className="add_btn_banner">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                t="1551322312294"
                viewBox="0 0 1024 1024"
                version="1.1"
                pId="10297"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <path
                  d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
                  pId="10298"
                ></path>
                <path
                  d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
                  pId="10299"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="overlay2"></div>
        <div className="overlay3"></div>
      </header>
    </div>
  );
};

export default Banner;
