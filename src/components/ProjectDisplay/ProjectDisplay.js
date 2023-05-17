import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Projects/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LinkRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="error" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link to={project.github} target="_blanck">
        <GitHubIcon />
      </Link>
      <Link to={project.link} className="launch" target="_blanck">
        <LinkRounded />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
