import React from "react";
import "./LandingCss/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dvote. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
