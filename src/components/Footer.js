import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src="https://i.pinimg.com/564x/98/3a/d9/983ad95d7d258ad27d83bfb89819cbec.jpg"
          alt="logo"
        />
      </div>
      <div className="footer-center">
        <a>Home</a>
        <a>About</a>
        <a>Tours</a>
        <a>Discography</a>
      </div>
      <div className="footer-right">
        <p>© 2021 No-Name. Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
