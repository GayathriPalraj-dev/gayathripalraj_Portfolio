import type { ComponentProps, FC } from "react";
import { Mail, MapPin, type LucideIcon } from "lucide-react";

import { footerData } from "../../../data/fooder";
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { Container } from "../../ui/Container";

import {
  footerAvailabilityStyles,
  footerBottomStyles,
  footerBrandCardStyles,
  footerBrandNameStyles,
  footerBuiltWithBadgeStyles,
  footerBuiltWithStyles,
  footerDecorLayerStyles,
  footerGroupCardStyles,
  footerGroupTitleStyles,
  footerLinkListStyles,
  footerLinkStyles,
  footerLocationStyles,
  footerMetaStyles,
  footerMiddleStyles,
  footerResumeButtonStyles,
  footerResumeCardStyles,
  footerRoleStyles,
  footerShellStyles,
  footerSocialLinkStyles,
  footerStyles,
  footerTaglineStyles,
  footerTopStyles,
} from "./Footer.styles";

type FooterIcon = FC<ComponentProps<"svg">>;

const GithubIcon: FooterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.11 2.93.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon: FooterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.94 8.98H3.8v10.36h3.14V8.98ZM5.37 4a1.82 1.82 0 1 0 0 3.64A1.82 1.82 0 0 0 5.37 4Zm13.82 9.39c0-3.12-1.67-4.57-3.89-4.57a3.36 3.36 0 0 0-3.03 1.67h-.04V8.98H9.22v10.36h3.13v-5.12c0-1.35.25-2.66 1.93-2.66 1.65 0 1.67 1.55 1.67 2.75v5.03h3.14l.1-5.95Z" />
  </svg>
);

const footerIconMap: Record<string, FooterIcon | LucideIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
};

const openResume = () => {
  window.location.href = footerData.resumeLink;
};

const Footer: FC = () => {
  return (
    <footer className={footerStyles}>
      <Container className="max-w-[78rem]">
        <div className={footerShellStyles}>
          <div className={footerDecorLayerStyles} aria-hidden="true">
            <div className="absolute left-[5%] top-[16%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute right-[6%] top-[20%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute bottom-0 right-0 h-36 w-36 translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/45 [html[data-theme='dark']_&]:bg-blue-600/20" />
          </div>

          <div className={footerTopStyles}>
            <Card className={footerBrandCardStyles}>
              <h2 className={footerBrandNameStyles}>
                {footerData.brand.name}
              </h2>

              <p className={footerRoleStyles}>
                {footerData.brand.role}
              </p>

              <p className={footerTaglineStyles}>
                {footerData.brand.tagline}
              </p>

              <p className={footerLocationStyles}>
                <MapPin size={16} aria-hidden="true" />
                {footerData.brand.location}
              </p>
            </Card>

            <Badge className={footerAvailabilityStyles} variant="secondary">
              {footerData.availability.status}
            </Badge>
          </div>

          <div className={footerMiddleStyles}>
            <Card className={footerGroupCardStyles}>
              <h3 className={footerGroupTitleStyles}>Quick Links</h3>

              <nav aria-label="Footer navigation" className={footerLinkListStyles}>
                {footerData.quickLinks.map((link) => (
                  <a className={footerLinkStyles} href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </Card>

            <Card className={footerGroupCardStyles}>
              <h3 className={footerGroupTitleStyles}>Social Links</h3>

              <div className={footerLinkListStyles}>
                {footerData.socialLinks.map((link) => {
                  const SocialIcon = footerIconMap[link.icon] ?? Mail;

                  return (
                    <a
                      aria-label={link.title}
                      className={footerSocialLinkStyles}
                      href={link.link}
                      key={link.id}
                      rel={link.external ? "noreferrer" : undefined}
                      target={link.external ? "_blank" : undefined}
                    >
                      <SocialIcon size={20} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className={footerResumeCardStyles}>
              <Button
                aria-label="Download resume"
                className={footerResumeButtonStyles}
                onClick={openResume}
                type="button"
                variant="primary"
              >
                {footerData.resumeLink}
              </Button>
            </Card>
          </div>

          <div className={footerBottomStyles}>
            <div className={footerBuiltWithStyles} aria-label="Built with">
              {footerData.builtWith.map((technology) => (
                <Badge
                  className={footerBuiltWithBadgeStyles}
                  key={technology}
                  variant="secondary"
                >
                  {technology}
                </Badge>
              ))}
            </div>

            <div className={footerMetaStyles}>
              <span>{footerData.version}</span>
              <span aria-hidden="true">•</span>
              <span>{footerData.copyright}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
