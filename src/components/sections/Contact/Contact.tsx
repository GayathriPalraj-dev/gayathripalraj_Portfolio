import type { ComponentProps, FC } from "react";
import {
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";

import { contactData } from "../../../data/contact";
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

import type { ContactProps } from "./Contact.types";

import {
  contactAccentRuleStyles,
  contactActionsStyles,
  contactAvailabilityCardStyles,
  contactAvailabilityDescriptionStyles,
  contactAvailabilityTitleStyles,
  contactCardLinkStyles,
  contactCardStyles,
  contactCardTitleStyles,
  contactCardValueStyles,
  contactCardsGridStyles,
  contactContentStyles,
  contactDecorLayerStyles,
  contactDescriptionStyles,
  contactHeaderStyles,
  contactHeadingAccentStyles,
  contactHeadingStyles,
  contactIconWrapStyles,
  contactLabelDotStyles,
  contactLabelStyles,
  contactPrimaryButtonStyles,
  contactSecondaryButtonStyles,
  contactSectionStyles,
  contactShellStyles,
} from "./Contact.styles";

const HEADING_ACCENT = "together.";

type ContactIcon = FC<ComponentProps<"svg">>;

const GithubIcon: ContactIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.11 2.93.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon: ContactIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.94 8.98H3.8v10.36h3.14V8.98ZM5.37 4a1.82 1.82 0 1 0 0 3.64A1.82 1.82 0 0 0 5.37 4Zm13.82 9.39c0-3.12-1.67-4.57-3.89-4.57a3.36 3.36 0 0 0-3.03 1.67h-.04V8.98H9.22v10.36h3.13v-5.12c0-1.35.25-2.66 1.93-2.66 1.65 0 1.67 1.55 1.67 2.75v5.03h3.14l.1-5.95Z" />
  </svg>
);

const contactIconMap: Record<string, ContactIcon | LucideIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  "map-pin": MapPin,
};

const openContactUrl = (href: string) => {
  if (!href) {
    return;
  }

  if (href.startsWith("http")) {
    window.open(href, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = href;
};

const Contact: FC<ContactProps> = ({
  className = "",
}) => {
  const [headingLead, headingAccent] = contactData.heading.includes(HEADING_ACCENT)
    ? contactData.heading.split(HEADING_ACCENT)
    : [contactData.heading, ""];

  return (
    <Section
      id="contact"
      className={`${contactSectionStyles} ${className}`.trim()}
    >
      <Container className="max-w-[78rem]">
        <div className={contactShellStyles}>
          <div className={contactDecorLayerStyles} aria-hidden="true">
            <div className="absolute left-[5%] top-[14%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute right-[7%] top-[18%] h-20 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.25rem_1.25rem] text-pink-300/70 [html[data-theme='dark']_&]:text-blue-500/45" />
            <div className="absolute left-[14%] top-[28%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-[14%] bottom-[24%] text-5xl leading-none text-pink-300 [html[data-theme='dark']_&]:text-blue-500/75">*</div>
            <div className="absolute right-[-3rem] bottom-[-3rem] h-36 w-36 rounded-full bg-pink-200/45 [html[data-theme='dark']_&]:bg-blue-600/20" />
          </div>

          <div className={contactHeaderStyles}>
            <p className={contactLabelStyles}>
              <span className={contactLabelDotStyles} aria-hidden="true" />
              {contactData.sectionTitle}
            </p>

            <h2 className={contactHeadingStyles}>
              {headingLead}
              {headingAccent ? (
                <span className={contactHeadingAccentStyles}>
                  {HEADING_ACCENT}
                </span>
              ) : null}
            </h2>

            <div className={contactAccentRuleStyles} aria-hidden="true" />

            <p className={contactDescriptionStyles}>
              {contactData.description}
            </p>
          </div>

          <div className={contactContentStyles}>
            <div className={contactCardsGridStyles}>
              {contactData.contacts.map((contact) => {
                const ContactIcon = contactIconMap[contact.icon] ?? Mail;
                const isLinked = Boolean(contact.link);

                return (
                  <Card
                    aria-label={`${contact.title}: ${contact.value}`}
                    className={[
                      contactCardStyles,
                      isLinked ? contactCardLinkStyles : "",
                    ].filter(Boolean).join(" ")}
                    key={contact.id}
                    onClick={isLinked ? () => openContactUrl(contact.link) : undefined}
                    onKeyDown={isLinked ? (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openContactUrl(contact.link);
                      }
                    } : undefined}
                    role={isLinked ? "link" : "group"}
                    tabIndex={0}
                  >
                    <div className={contactIconWrapStyles} aria-hidden="true">
                      <ContactIcon size={24} strokeWidth={2.2} />
                    </div>

                    <h3 className={contactCardTitleStyles}>
                      {contact.title}
                    </h3>

                    <p className={contactCardValueStyles}>
                      {contact.value}
                    </p>
                  </Card>
                );
              })}
            </div>

            <Card
              className={contactAvailabilityCardStyles}
              tabIndex={0}
            >
              <h3 className={contactAvailabilityTitleStyles}>
                {contactData.availability.title}
              </h3>

              <p className={contactAvailabilityDescriptionStyles}>
                {contactData.availability.description}
              </p>

              <div className={contactActionsStyles}>
                <Button
                  aria-label={contactData.cta.primary.label}
                  className={contactPrimaryButtonStyles}
                  onClick={() => openContactUrl(contactData.cta.primary.href)}
                  type="button"
                  variant="primary"
                >
                  {contactData.cta.primary.label}
                </Button>

                <Button
                  aria-label={contactData.cta.secondary.label}
                  className={contactSecondaryButtonStyles}
                  onClick={() => openContactUrl(contactData.cta.secondary.href)}
                  type="button"
                  variant="secondary"
                >
                  {contactData.cta.secondary.label}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
