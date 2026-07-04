import type { FC } from "react";
import type { ButtonProps } from "./Button.types";

import {
  buttonBaseStyles,
  buttonSizes,
  buttonVariants,
} from "./Button.styles";

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        ${buttonBaseStyles}
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;