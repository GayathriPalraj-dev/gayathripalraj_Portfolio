import { createElement, type FC } from "react";
import type { HeadingProps } from "./Heading.types";

const headingStyles = {
  1: "text-5xl font-bold tracking-tight",
  2: "text-4xl font-bold tracking-tight",
  3: "text-3xl font-semibold",
  4: "text-2xl font-semibold",
  5: "text-xl font-medium",
  6: "text-lg font-medium",
};

const Heading: FC<HeadingProps> = ({
  level = 2,
  children,
  className = "",
  ...props
}) => {
  return createElement(
    `h${level}`,
    {
      className: `${headingStyles[level]} ${className}`.trim(),
      ...props,
    },
    children,
  );
};

export default Heading;
