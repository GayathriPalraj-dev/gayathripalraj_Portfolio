import type { FC } from "react";
import type { TextProps } from "./Text.types";

const textStyles = {
  body: "text-base leading-7",
  small: "text-sm leading-6",
  muted: "text-base text-muted-foreground leading-7",
  caption: "text-xs text-muted-foreground",
};

const Text: FC<TextProps> = ({
  variant = "body",
  children,
  className = "",
  ...props
}) => {
  return (
    <p
      className={`${textStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;