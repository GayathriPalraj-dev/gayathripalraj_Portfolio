export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export const portfolioEmailAddress = "gayathri.2842004@gmail.com";
export const portfolioEmailHref =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioEmailAddress}&su=Software%20Engineer%20Opportunity`;

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/GayathriPalraj-dev",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gayathri-palraj",
  },
  {
    id: "email",
    label: "Email",
    href: portfolioEmailHref,
  },
];
