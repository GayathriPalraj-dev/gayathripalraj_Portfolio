import type { FC } from "react";

import { experienceData } from "../../../data/experience";
import { Badge } from "../../ui/Badge";
import { Card } from "../../ui/Card";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

import type { ExperienceProps } from "./Experience.types";

import {
  educationCardStyles,
  educationDegreeStyles,
  educationLabelStyles,
  educationMetaListStyles,
  educationScoreStyles,
  educationSpecializationStyles,
  experienceAccentRuleStyles,
  experienceBadgeListStyles,
  experienceBadgeStyles,
  experienceBodyStyles,
  experienceCardHeaderStyles,
  experienceCardStyles,
  experienceCompanyStyles,
  experienceContentGridStyles,
  experienceDecorLayerStyles,
  experienceDescriptionStyles,
  experienceHeadingAccentStyles,
  experienceHeadingStyles,
  experienceHeaderStyles,
  experienceLabelDotStyles,
  experienceLabelStyles,
  experienceMetaStyles,
  experienceRoleStyles,
  experienceSectionStyles,
  experienceShellStyles,
  experienceTimelineItemStyles,
  experienceTimelineLineStyles,
  experienceTimelineMarkerStyles,
  experienceTimelineStyles,
  experienceTypeStyles,
} from "./Experience.styles";

const HEADING_ACCENT = "real-world experience.";

const Experience: FC<ExperienceProps> = ({
  className = "",
}) => {
  const [headingLead, headingAccent] = experienceData.heading.includes(HEADING_ACCENT)
    ? experienceData.heading.split(HEADING_ACCENT)
    : [experienceData.heading, ""];

  return (
    <Section
      id="experience"
      className={`${experienceSectionStyles} ${className}`.trim()}
    >
      <Container className="max-w-[78rem]">
        <div className={experienceShellStyles}>
          <div className={experienceDecorLayerStyles} aria-hidden="true">
            <div className="absolute left-[5%] top-[15%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute right-[7%] top-[18%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute left-[14%] top-[22%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-[13%] bottom-[18%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-0 top-16 h-36 w-36 translate-x-1/2 rounded-full bg-pink-200/45 [html[data-theme='dark']_&]:bg-blue-600/20" />
          </div>

          <div className={experienceHeaderStyles}>
            <p className={experienceLabelStyles}>
              <span className={experienceLabelDotStyles} aria-hidden="true" />
              {experienceData.sectionTitle}
            </p>

            <h2 className={experienceHeadingStyles}>
              {headingLead}
              {headingAccent ? (
                <span className={experienceHeadingAccentStyles}>
                  {HEADING_ACCENT}
                </span>
              ) : null}
            </h2>

            <div className={experienceAccentRuleStyles} aria-hidden="true" />

            <p className={experienceDescriptionStyles}>
              {experienceData.description}
            </p>
          </div>

          <div className={experienceContentGridStyles}>
            <div className={experienceTimelineStyles} aria-label={experienceData.sectionTitle}>
              <div className={experienceTimelineLineStyles} aria-hidden="true" />

              {experienceData.experiences.map((experience) => (
                <article className={experienceTimelineItemStyles} key={experience.id}>
                  <div className={experienceTimelineMarkerStyles} aria-hidden="true" />

                  <Card
                    className={experienceCardStyles}
                    tabIndex={0}
                  >
                    <div className={experienceCardHeaderStyles}>
                      <div>
                        <span className={experienceTypeStyles}>
                          {experience.type}
                        </span>

                        <h3 className={experienceRoleStyles}>
                          {experience.role}
                        </h3>

                        <p className={experienceCompanyStyles}>
                          {experience.company}
                        </p>
                      </div>

                      <div className={experienceMetaStyles}>
                        <span>{experience.duration}</span>
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <p className={experienceBodyStyles}>
                      {experience.description}
                    </p>

                    <div
                      className={experienceBadgeListStyles}
                      aria-label={`${experience.role} technologies`}
                    >
                      {experience.technologies.map((technology) => (
                        <Badge
                          className={experienceBadgeStyles}
                          key={technology}
                          variant="secondary"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </article>
              ))}
            </div>

            <Card
              className={educationCardStyles}
              tabIndex={0}
            >
              <p className={educationLabelStyles}>
                <span className={experienceLabelDotStyles} aria-hidden="true" />
                {experienceData.education.degree}
              </p>

              <h3 className={educationDegreeStyles}>
                {experienceData.education.specialization}
              </h3>

              <p className={educationSpecializationStyles}>
                {experienceData.education.college}
              </p>

              <dl className={educationMetaListStyles}>
                <div>
                  <dt className="sr-only">Duration</dt>
                  <dd>{experienceData.education.duration}</dd>
                </div>
                <div>
                  <dt className="sr-only">Location</dt>
                  <dd>{experienceData.education.location}</dd>
                </div>
              </dl>

              <p className={educationScoreStyles}>
                {experienceData.education.score}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
