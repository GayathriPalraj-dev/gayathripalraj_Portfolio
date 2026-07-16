import type { FC } from "react";

import { projectsData } from "../../../data/projects";
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

import type { ProjectsProps } from "./Projects.types";

import {
  projectCardMediaStyles,
  projectCardStyles,
  projectActionsStyles,
  projectDemoButtonStyles,
  projectDescriptionStyles,
  projectFeaturedCardStyles,
  projectFeaturedMediaStyles,
  projectGithubButtonStyles,
  projectImageStyles,
  projectTechnologyBadgeStyles,
  projectTechnologyListStyles,
  projectsAccentRuleStyles,
  projectsDecorLayerStyles,
  projectsDescriptionStyles,
  projectsGridStyles,
  projectsHeaderStyles,
  projectsHeadingAccentStyles,
  projectsHeadingStyles,
  projectsLabelDotStyles,
  projectsLabelStyles,
  projectsSectionStyles,
  projectsShellStyles,
  projectTitleStyles,
} from "./Projects.styles";

type ProjectWithFeaturedFlag = (typeof projectsData)[number] & {
  featured?: boolean;
};

const createProjectPreviewImage = (title: string) => {
  const svg = `
    <svg width="960" height="540" viewBox="0 0 960 540" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="960" height="540" rx="32" fill="#FFF1F7"/>
      <circle cx="764" cy="112" r="92" fill="#F9A8D4" fill-opacity="0.32"/>
      <circle cx="158" cy="426" r="140" fill="#FBCFE8" fill-opacity="0.42"/>
      <path d="M112 150H848" stroke="#F472B6" stroke-opacity="0.22" stroke-width="2"/>
      <path d="M112 390H848" stroke="#F472B6" stroke-opacity="0.18" stroke-width="2"/>
      <rect x="132" y="176" width="696" height="188" rx="24" fill="white" fill-opacity="0.72" stroke="#F9A8D4"/>
      <text x="480" y="282" text-anchor="middle" fill="#BE185D" font-family="Inter, Arial, sans-serif" font-size="44" font-weight="800">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const isFeaturedProject = (project: (typeof projectsData)[number]) =>
  Boolean((project as ProjectWithFeaturedFlag).featured);

const openProjectUrl = (url?: string | null) => {
  if (!url) {
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
};

const Projects: FC<ProjectsProps> = ({
  className = "",
}) => {
  return (
    <Section
      id="projects"
      className={`${projectsSectionStyles} ${className}`.trim()}
    >
      <Container className="max-w-[78rem]">
        <div className={projectsShellStyles}>
          <div className={projectsDecorLayerStyles} aria-hidden="true">
            <div className="absolute left-[6%] top-[18%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-[8%] top-[28%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute bottom-0 right-0 h-36 w-36 translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/45 [html[data-theme='dark']_&]:bg-blue-600/20" />
          </div>

          <div className={projectsHeaderStyles}>
            <p className={projectsLabelStyles}>
              <span className={projectsLabelDotStyles} aria-hidden="true" />
              My Work
            </p>

            <h2 className={projectsHeadingStyles}>
              Projects that{" "}
              <span className={projectsHeadingAccentStyles}>
                make an impact
              </span>
            </h2>

            <div className={projectsAccentRuleStyles} aria-hidden="true" />

            <p className={projectsDescriptionStyles}>
              A focused collection of work that reflects my approach to building
              useful, reliable, and thoughtfully designed web applications.
            </p>
          </div>

          <div className={projectsGridStyles}>
            {projectsData.map((project) => {
              const isFeatured = isFeaturedProject(project);

              return (
                <Card
                  className={[
                    projectCardStyles,
                    isFeatured ? projectFeaturedCardStyles : "",
                  ].filter(Boolean).join(" ")}
                  key={project.title}
                >
                  <div
                    className={[
                      projectCardMediaStyles,
                      isFeatured ? projectFeaturedMediaStyles : "",
                    ].filter(Boolean).join(" ")}
                  >
                    <img
                      className={projectImageStyles}
                      src={createProjectPreviewImage(project.title)}
                      alt={`${project.title} preview`}
                      width={960}
                      height={540}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h3 className={projectTitleStyles}>{project.title}</h3>
                  <p className={projectDescriptionStyles}>
                    {project.description}
                  </p>

                  <div className={projectTechnologyListStyles}>
                    {project.technologies.map((technology) => (
                      <Badge
                        className={projectTechnologyBadgeStyles}
                        key={technology}
                        variant="secondary"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  <div className={projectActionsStyles}>
                    <Button
                      aria-label={`Open ${project.title} GitHub repository`}
                      className={projectGithubButtonStyles}
                      disabled={!project.github}
                      onClick={() => openProjectUrl(project.github)}
                      type="button"
                      variant="secondary"
                    >
                      GitHub
                    </Button>

                    <Button
                      aria-label={`Open ${project.title} live demo`}
                      className={projectDemoButtonStyles}
                      disabled={!project.demo}
                      onClick={() => openProjectUrl(project.demo)}
                      type="button"
                      variant="primary"
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
