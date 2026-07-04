import type { FC } from "react";

import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

import { heroData } from "../../../data/hero";

import type { HeroProps } from "./Hero.types";

import {
  heroSectionStyles,
  heroContainerStyles,
  heroContentStyles,
  heroImageWrapperStyles,
} from "./Hero.styles";

const Hero: FC<HeroProps> = ({
  className = "",
}) => {
  return (
    <Section className={`${heroSectionStyles} ${className}`.trim()}>
      <Container>
        <div className={heroContainerStyles}>
          {/* Left Side */}
          <div className={heroContentStyles}>
            <p>{heroData.greeting}</p>

            <h1>{heroData.name}</h1>

            <h2>{heroData.roles[0]}</h2>

            <p>{heroData.tagline}</p>
          </div>

          {/* Right Side */}
          <div className={heroImageWrapperStyles}>
            <div
              style={{
                width: "350px",
                height: "420px",
                borderRadius: "24px",
                background: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
                color: "#888",
              }}
            >
              Profile Image
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;