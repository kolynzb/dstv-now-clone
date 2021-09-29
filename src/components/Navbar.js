import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "../store/userSlice";
import "./styles/Navbar.css";
const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const user = useSelector(selectUser);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setshowNav(true) : setshowNav(false);
    });
  }, []);
  let history = useHistory();
  return (
    <div className={`navbarContainer  ${showNav && "navblack"}`}>
      <nav>
        <div className="navleft">
          <img
            className="logo"
            src="https://now.dstv.com/static/media/logo_dstv.e9762ba5.svg"
            alt="logo"
            width="100px"
            onClick={() => history.push("/")}
          />

          {user && (
            <ul className="nav_links">
              <li className="nav_link">Live TV</li>
              <li className="nav_link">TV Shows</li>
              <li className="nav_link">Movies</li>
              <li className="nav_link">Sport</li>
              <li className="nav_link">Kids</li>
              <li className="nav_link">TV Guide</li>
              <li className="nav_link">My List</li>
            </ul>
          )}
        </div>
        {user ? (
          <div className="nav_right">
            <img
              src="https://res.cloudinary.com/dstv/image/upload/w_384,h_384,f_auto/v1559643500/profiles/13.png"
              alt="avator"
              width="25px"
              className="nav_avator"
            />
            <div className="nav_chevron">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <svg
              className="searchIcon"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </div>
        ) : (
          <button
            className="bottom_btn btn"
            onclick={() => history.push("/SignInScreen")}
          >
            Sign in
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
{
  /* */
}
