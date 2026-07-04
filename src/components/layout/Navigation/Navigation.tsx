import type { FC } from "react";

import { navigationItems } from "../../../data/navigation";

import type { NavigationProps } from "./Navigation.types";

import {
  navigationContainerStyles,
  navigationLinkStyles,
} from "./Navigation.styles";

const Navigation: FC<NavigationProps> = ({
  className = "",
}) => {
  return (
    <nav
      className={`${navigationContainerStyles} ${className}`.trim()}
    >
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={navigationLinkStyles}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;