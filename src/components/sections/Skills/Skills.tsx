import type { FC } from "react";
import {
  Database,
  Monitor,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { skillsData } from "../../../data/skills";
import { Badge } from "../../ui/Badge";
import { Card } from "../../ui/Card";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

import {
  skillBadgeListStyles,
  skillBadgeStyles,
  skillCardHeaderStyles,
  skillCardStyles,
  skillIconWrapStyles,
  skillsAccentRuleStyles,
  skillsDecorLayerStyles,
  skillsDescriptionStyles,
  skillsGridStyles,
  skillsHeaderStyles,
  skillsHeadingAccentStyles,
  skillsHeadingStyles,
  skillsLabelDotStyles,
  skillsLabelStyles,
  skillsSectionStyles,
  skillsShellStyles,
  skillTitleStyles,
} from "./Skills.styles";

interface SkillsProps {
  className?: string;
}

const HEADING_ACCENT = "modern web applications.";

const skillIconMap: Record<string, LucideIcon> = {
  database: Database,
  monitor: Monitor,
  server: Server,
  sparkles: Sparkles,
  wrench: Wrench,
};

const Skills: FC<SkillsProps> = ({
  className = "",
}) => {
  const [headingLead, headingAccent] = skillsData.heading.includes(HEADING_ACCENT)
    ? skillsData.heading.split(HEADING_ACCENT)
    : [skillsData.heading, ""];

  return (
    <Section
      id="skills"
      className={`${skillsSectionStyles} ${className}`.trim()}
    >
      <Container className="max-w-[78rem]">
        <div className={skillsShellStyles}>
          <div className={skillsDecorLayerStyles} aria-hidden="true">
            <div className="absolute left-[5%] top-[16%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute right-[7%] top-[20%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute left-[15%] top-[28%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-[14%] bottom-[20%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-[-3rem] bottom-[-3rem] h-36 w-36 rounded-full bg-pink-200/45 [html[data-theme='dark']_&]:bg-blue-600/20" />
          </div>

          <div className={skillsHeaderStyles}>
            <p className={skillsLabelStyles}>
              <span className={skillsLabelDotStyles} aria-hidden="true" />
              {skillsData.sectionTitle}
            </p>

            <h2 className={skillsHeadingStyles}>
              {headingLead}
              {headingAccent ? (
                <span className={skillsHeadingAccentStyles}>
                  {HEADING_ACCENT}
                </span>
              ) : null}
            </h2>

            <div className={skillsAccentRuleStyles} aria-hidden="true" />

            <p className={skillsDescriptionStyles}>
              {skillsData.description}
            </p>
          </div>

          <div className={skillsGridStyles}>
            {skillsData.categories.map((category) => {
              const CategoryIcon = skillIconMap[category.icon] ?? Sparkles;

              return (
                <Card
                  aria-labelledby={`skill-category-${category.id}`}
                  className={skillCardStyles}
                  key={category.id}
                  tabIndex={0}
                >
                  <div className={skillCardHeaderStyles}>
                    <div className={skillIconWrapStyles} aria-hidden="true">
                      <CategoryIcon size={24} strokeWidth={2.2} />
                    </div>

                    <h3
                      className={skillTitleStyles}
                      id={`skill-category-${category.id}`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div
                    aria-label={`${category.title} skills`}
                    className={skillBadgeListStyles}
                  >
                    {category.items.map((skill) => (
                      <Badge
                        className={skillBadgeStyles}
                        key={skill}
                        variant="secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
