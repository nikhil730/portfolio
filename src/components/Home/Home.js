import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import image from "./homepic.svg";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Nikhil</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          {/* <Link to="https://www.linkedin.com/in/nikhil-bhalla-116704206/">
            <LinkedInIcon />
          </Link>
          <EmailIcon />
          <Link to="https://github.com/nikhil730">
            <GithubIcon />
          </Link> */}
        </div>
        <img className="img" src={image} alt="error"></img>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <div className="grid top">
          <div className="item frontend">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
              StyledComponents
            </span>
          </div>
          <div className="item backend">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </div>
        </div>
        <div className="grid bottom">
          <div className="item language">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
              StyledComponents
            </span>
          </div>
          <div className="item technical">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </div>
        </div>
        {/* <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
              StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++</span>
          </li>
          <li className="item">
            <h2>Proficient In</h2>
            <span>
              Data Structures, Algorithm Design and Analysis, Database Managment
              Systems, OOPS
            </span>
          </li>
        </ol> */}
      </div>
    </div>
  );
};
export default Home;
