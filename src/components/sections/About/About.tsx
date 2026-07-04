import type { FC } from "react";

import type { AboutProps } from "./About.types";

import { aboutSectionStyles } from "./About.styles";

const About: FC<AboutProps> = ({
  className = "",
}) => {
  return (
    <section
      className={`${aboutSectionStyles} ${className}`.trim()}
      id="about"
    >
      About Section
    </section>
  );
};

export default About;