export const badgeBaseStyles = `
inline-flex
items-center
justify-center
rounded-full
px-3
py-1
text-xs
font-medium
transition-colors
`;

export const badgeVariants = {
  primary:
    "bg-primary text-primary-foreground",

  secondary:
    "bg-secondary text-secondary-foreground",

  success:
    "bg-green-500 text-white",

  warning:
    "bg-yellow-500 text-black",

  danger:
    "bg-red-500 text-white",
} as const;