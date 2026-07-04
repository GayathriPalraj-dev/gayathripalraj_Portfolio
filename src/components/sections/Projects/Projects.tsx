import type { FC } from "react";

import type { ProjectsProps } from "./Projects.types";

import { projectsSectionStyles } from "./Projects.styles";

const Projects: FC<ProjectsProps> = ({
  className = "",
}) => {
  return (
    <section
      id="projects"
      className={`${projectsSectionStyles} ${className}`.trim()}
    >
      Projects Section
    </section>
  );
};

export default Projects;