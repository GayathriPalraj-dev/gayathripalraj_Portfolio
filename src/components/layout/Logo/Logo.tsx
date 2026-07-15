import type { FC } from "react";

import type { LogoProps } from "./Logo.types";

import {
  logoContainerStyles,
  logoIconStyles,
  logoTextStyles,
} from "./Logo.styles";

const Logo: FC<LogoProps> = ({
  className = "",
}) => {
  return (
    <a
      href="#home"
      className={`${logoContainerStyles} ${className}`.trim()}
      aria-label="Gayathri Palraj home"
    >
      <div className={logoIconStyles}>
        G
      </div>

      <span className={logoTextStyles}>
        Gayathri
      </span>
    </a>
  );
};

export default Logo;
