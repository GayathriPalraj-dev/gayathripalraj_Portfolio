import type { FC } from "react";

import type { ExperienceProps } from "./Experience.types";

import { experienceSectionStyles } from "./Experience.styles";

const Experience: FC<ExperienceProps> = ({
  className = "",
}) => {
  return (
    <section
      id="experience"
      className={`${experienceSectionStyles} ${className}`.trim()}
    >
      Experience Section
    </section>
  );
};

export default Experience;