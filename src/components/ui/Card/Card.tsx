import type { FC } from "react";
import type { CardProps } from "./Card.types";

import { cardBaseStyles } from "./Card.styles";

const Card: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        ${cardBaseStyles}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;