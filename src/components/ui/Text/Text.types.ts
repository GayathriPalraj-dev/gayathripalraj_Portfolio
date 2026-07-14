import type { HTMLAttributes, ReactNode } from "react";

export type TextVariant =
  | "body"
  | "small"
  | "muted"
  | "caption";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: TextVariant;
}
