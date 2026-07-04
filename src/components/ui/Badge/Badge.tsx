import type { FC } from "react";
import type { BadgeProps } from "./Badge.types";

import {
  badgeBaseStyles,
  badgeVariants,
} from "./Badge.styles";

const Badge: FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <span
      className={`
        ${badgeBaseStyles}
        ${badgeVariants[variant]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;