import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { GitHub } from "@material-ui/icons";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.instagram.com/nikhil.bhalla/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link to="https://github.com/nikhil730" target="_blank">
          <GitHub />
        </Link>

        <Link
          to="https://www.linkedin.com/in/nikhil-bhalla-116704206/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <p className="name"> &copy; Nikhil Bhalla</p>
    </div>
  );
}

export default Footer;
