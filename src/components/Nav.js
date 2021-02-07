import React from "react";
import "../styles/Nav.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-left">
      <div className="nav-logo">
        <img
          src="https://i.pinimg.com/564x/98/3a/d9/983ad95d7d258ad27d83bfb89819cbec.jpg"
          alt="logo"
        />
      </div>
        <a>Home</a>
        <a>About Us</a>
        <a>Music</a>
      </div>
      <div className="nav-right">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Nav;
