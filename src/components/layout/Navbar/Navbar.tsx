import type { FC } from "react";

import { Container } from "../../ui/Container";
import { ThemeToggle } from "../../ui/ThemeToggle";

import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

import type { NavbarProps } from "./Navbar.types";

import {
  navbarStyles,
  navbarContainerStyles,
  navbarRightStyles,
} from "./Navbar.styles";

const Navbar: FC<NavbarProps> = ({
  className = "",
}) => {
  return (
    <header
      className={`${navbarStyles} ${className}`.trim()}
    >
      <Container>
        <div className={navbarContainerStyles}>
          <Logo />

          <div className={navbarRightStyles}>
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;