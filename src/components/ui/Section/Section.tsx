import type { FC } from "react";
import type { SectionProps } from "./Section.types";

const Section: FC<SectionProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <section
      className={`py-20 ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;