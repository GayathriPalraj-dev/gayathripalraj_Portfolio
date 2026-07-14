import type { FC } from "react";

import heroDarkImage from "../../../assets/Images/profile/hero-dark.png";
import heroLightImage from "../../../assets/Images/profile/hero-light.png";
import { aboutData, technologyGroups } from "../../../data/about";
import { useTheme } from "../../../hooks/useTheme";
import { Badge } from "../../ui/Badge";
import { Card } from "../../ui/Card";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

import type { AboutProps } from "./About.types";

import {
  aboutAccentRuleStyles,
  aboutContentStyles,
  aboutDecorLayerStyles,
  aboutDescriptionGroupStyles,
  aboutDescriptionStyles,
  aboutGridStyles,
  aboutHeadingAccentStyles,
  aboutHeadingStyles,
  aboutImageBackdropStyles,
  aboutImageColumnStyles,
  aboutImageRingStyles,
  aboutLabelDotStyles,
  aboutLabelStyles,
  aboutProfileImageStyles,
  aboutSectionStyles,
  aboutShellStyles,
  aboutStatCardStyles,
  aboutStatDescriptionStyles,
  aboutStatsPlaceholderStyles,
  aboutStatLabelStyles,
  aboutStatValueStyles,
  aboutTechnologyBadgeStyles,
  aboutTechnologyCardStyles,
  aboutTechnologyGridStyles,
  aboutTechnologyHeaderStyles,
  aboutTechnologyListStyles,
  aboutTechnologySectionStyles,
  aboutTechnologyTitleStyles,
} from "./About.styles";

const HEADING_ACCENT = "passion and purpose.";

const aboutStatistics = [
  {
    id: "education",
    value: "B.E CSE",
    label: "Graduate",
    description: "Computer Science foundation",
  },
  {
    id: "developer",
    value: "Full Stack",
    label: "Developer",
    description: "Frontend and backend delivery",
  },
  {
    id: "stack",
    value: "MERN",
    label: "Stack",
    description: "MongoDB, Express, React, Node",
  },
  {
    id: "ai",
    value: "AI",
    label: "Enthusiast",
    description: "Learning intelligent solutions",
  },
] as const;

const About: FC<AboutProps> = ({
  className = "",
}) => {
  const { theme } = useTheme();
  const profileImage = theme === "dark" ? heroDarkImage : heroLightImage;
  const [headingLead, headingAccent] = aboutData.heading.includes(HEADING_ACCENT)
    ? aboutData.heading.split(HEADING_ACCENT)
    : [aboutData.heading, ""];

  return (
    <Section
      className={`${aboutSectionStyles} ${className}`.trim()}
      id="about"
    >
      <Container className="max-w-[78rem]">
        <div className={aboutShellStyles}>
          <div className={aboutDecorLayerStyles} aria-hidden="true">
            <div className="absolute left-[2%] top-[12%] h-24 w-24 rounded-full bg-pink-200/35 blur-sm [html[data-theme='dark']_&]:bg-blue-600/20" />
            <div className="absolute right-0 top-12 h-32 w-32 translate-x-1/2 rounded-full bg-pink-200/55 [html[data-theme='dark']_&]:bg-blue-600/20" />
            <div className="absolute left-[3%] bottom-[30%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute right-[5%] top-[12%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute left-[7%] top-[20%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-[8%] bottom-[34%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
          </div>

          <div className={aboutGridStyles}>
            <div className={aboutImageColumnStyles}>
              <div className={aboutImageBackdropStyles} aria-hidden="true" />
              <div className={aboutImageRingStyles} aria-hidden="true" />
              <img
                className={aboutProfileImageStyles}
                src={profileImage}
                alt="Gayathri Palraj"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={aboutContentStyles}>
              <p className={aboutLabelStyles}>
                <span className={aboutLabelDotStyles} aria-hidden="true" />
                {aboutData.title}
              </p>

              <h2 className={aboutHeadingStyles}>
                {headingLead}
                {headingAccent ? (
                  <span className={aboutHeadingAccentStyles}>
                    {HEADING_ACCENT}
                  </span>
                ) : null}
              </h2>

              <div className={aboutAccentRuleStyles} aria-hidden="true" />

              <div className={aboutDescriptionGroupStyles}>
                {aboutData.description.map((paragraph) => (
                  <p className={aboutDescriptionStyles} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={aboutStatsPlaceholderStyles}>
                {aboutStatistics.map((statistic) => (
                  <Card className={aboutStatCardStyles} key={statistic.id}>
                    <p className={aboutStatValueStyles}>{statistic.value}</p>
                    <h3 className={aboutStatLabelStyles}>{statistic.label}</h3>
                    <p className={aboutStatDescriptionStyles}>
                      {statistic.description}
                    </p>
                  </Card>
                ))}
              </div>

              <div className={aboutTechnologySectionStyles}>
                <p className={aboutTechnologyHeaderStyles}>
                  <span className={aboutLabelDotStyles} aria-hidden="true" />
                  Technologies I Work With
                </p>

                <div className={aboutTechnologyGridStyles}>
                  {technologyGroups.map((group) => (
                    <Card className={aboutTechnologyCardStyles} key={group.title}>
                      <h3 className={aboutTechnologyTitleStyles}>{group.title}</h3>

                      <div className={aboutTechnologyListStyles}>
                        {group.items.map((technology) => (
                          <Badge
                            className={aboutTechnologyBadgeStyles}
                            key={technology}
                            variant="secondary"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
