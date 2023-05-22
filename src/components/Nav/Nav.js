import React from "react";
import { AppBar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  let navigate = useNavigate();
  const handleclick = () => {
    console.log("hello");
    navigate(
      "https://drive.google.com/file/d/1xRz65utyOq50thkZlo6OTR5XCRdUfpko/view?usp=share_link"
    );
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link
          className="link"
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          className="link"
          to="/projects"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Projects{" "}
        </Link>
        <Link
          className="link"
          to="/experience"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Experience{" "}
        </Link>
        <Link
          to="https://drive.google.com/file/d/1xRz65utyOq50thkZlo6OTR5XCRdUfpko/view?usp=share_link"
          target="_blanck"
        >
          <Button variant="contained" color="primary" className="resume">
            Resume/CV
          </Button>
        </Link>
      </div>
      <div className="prompt">
        <Link to="https://www.linkedin.com/in/nikhil-bhalla-116704206/">
          <LinkedInIcon />
        </Link>
        <Link to="/contact">
          <EmailIcon />
        </Link>
        <Link to="https://github.com/nikhil730">
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
};
export default Nav;
