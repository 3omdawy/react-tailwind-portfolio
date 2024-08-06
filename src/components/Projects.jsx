import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectItem from "./ProjectItem";
import projects from "../data/projects";

function Projects() {
  return (
    <div className="py-12">
      <SectionTitle id="projects">Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project}></ProjectItem>
        ))}
      </div>
    </div>
  );
}

export default Projects;
