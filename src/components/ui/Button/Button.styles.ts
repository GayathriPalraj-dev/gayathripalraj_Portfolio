export const buttonVariants = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90",

  secondary:
    "bg-secondary text-secondary-foreground hover:opacity-90",

  ghost:
    "bg-transparent text-foreground hover:bg-muted",
} as const;

export const buttonSizes = {
  sm: "px-3 py-2 text-sm",

  md: "px-5 py-3 text-base",

  lg: "px-6 py-4 text-lg",
} as const;

export const buttonBaseStyles = `
inline-flex
items-center
justify-center
rounded-xl
font-medium
transition-all
duration-200
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-primary
focus-visible:ring-offset-2
disabled:opacity-50
disabled:pointer-events-none
cursor-pointer
`;
