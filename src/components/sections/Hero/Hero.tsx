import { useEffect, useMemo, useState, type ComponentProps, type FC } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  Code2,
  Download,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import heroDarkImage from "../../../assets/Images/profile/hero-dark.png";
import heroLightImage from "../../../assets/Images/profile/hero-light.png";
import { heroData } from "../../../data/hero";
import { socialLinks } from "../../../data/socialLinks";
import { useTheme } from "../../../hooks/useTheme";
import { Container } from "../../ui/Container";
import { Section } from "../../ui/Section";

import type { HeroProps } from "./Hero.types";

import {
  heroAccentRuleStyles,
  heroButtonRowStyles,
  heroContainerStyles,
  heroContentStyles,
  heroCursorStyles,
  heroDecorLayerStyles,
  heroGreetingStyles,
  heroImageWrapperStyles,
  heroNameAccentStyles,
  heroNameStyles,
  heroPortraitFrameStyles,
  heroPortraitStyles,
  heroPrimaryCtaStyles,
  heroRoleStyles,
  heroSecondaryCtaStyles,
  heroSectionStyles,
  heroShellStyles,
  heroSocialLinkStyles,
  heroSocialListStyles,
  heroStatDescriptionStyles,
  heroStatIconStyles,
  heroStatItemStyles,
  heroStatsStyles,
  heroStatTitleStyles,
  heroTaglineStyles,
} from "./Hero.styles";

const TYPE_SPEED = 70;
const DELETE_SPEED = 36;
const HOLD_DELAY = 1450;

const highlightIcons: Record<(typeof heroData.highlights)[number]["icon"], LucideIcon> = {
  "map-pin": MapPin,
  badge: Award,
  code: Code2,
  rocket: Rocket,
};

type SocialIcon = FC<ComponentProps<"svg">>;

const GithubIcon: SocialIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.11 2.93.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.18 10.18 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon: SocialIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.94 8.98H3.8v10.36h3.14V8.98ZM5.37 4a1.82 1.82 0 1 0 0 3.64A1.82 1.82 0 0 0 5.37 4Zm13.82 9.39c0-3.12-1.67-4.57-3.89-4.57a3.36 3.36 0 0 0-3.03 1.67h-.04V8.98H9.22v10.36h3.13v-5.12c0-1.35.25-2.66 1.93-2.66 1.65 0 1.67 1.55 1.67 2.75v5.03h3.14l.1-5.95Z" />
  </svg>
);

const socialIcons: Record<string, SocialIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
};

const entranceContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const entranceItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function useTypewriter(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const currentWord = words[wordIndex] ?? "";
    const isWordComplete = visibleCharacters === currentWord.length;
    const isWordCleared = visibleCharacters === 0;
    const timeoutDelay = isWordComplete && !isDeleting
      ? HOLD_DELAY
      : isDeleting
        ? DELETE_SPEED
        : TYPE_SPEED;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordCleared) {
        setIsDeleting(false);
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
        return;
      }

      setVisibleCharacters((currentCount) => currentCount + (isDeleting ? -1 : 1));
    }, timeoutDelay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, prefersReducedMotion, visibleCharacters, wordIndex, words]);

  if (prefersReducedMotion) {
    return words[0] ?? "";
  }

  return words[wordIndex]?.slice(0, visibleCharacters) ?? "";
}

const Hero: FC<HeroProps> = ({
  className = "",
}) => {
  const typedRole = useTypewriter(heroData.roles);
  const { theme } = useTheme();

  const profileImage = theme === "dark" ? heroDarkImage : heroLightImage;
  const [firstName, ...lastNameParts] = heroData.name.split(" ");
  const lastName = lastNameParts.join(" ");

  const visibleSocialLinks = useMemo(
    () => socialLinks.filter((link) => link.id in socialIcons),
    [],
  );

  return (
    <Section id="home" className={`${heroSectionStyles} ${className}`.trim()}>
      <Container className="max-w-[92rem]">
        <div className={heroShellStyles}>
          <div className={heroDecorLayerStyles} aria-hidden="true">
            <div className="absolute left-[3.5%] top-[5%] h-16 w-16 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.5rem_1.5rem] text-pink-300/65 [html[data-theme='dark']_&]:text-blue-500/35" />
            <div className="absolute right-[5%] top-[16%] h-28 w-24 bg-[radial-gradient(circle,currentColor_2px,transparent_2.8px)] bg-[length:1.45rem_1.45rem] text-pink-300/75 [html[data-theme='dark']_&]:text-blue-500/70" />
            <div className="absolute bottom-[16%] right-[6%] h-24 w-24 rounded-full bg-pink-300/30 blur-sm [html[data-theme='dark']_&]:bg-blue-600/35" />
            <div className="absolute right-[14%] top-[36%] h-14 w-14 rounded-full bg-pink-300/30 blur-md [html[data-theme='dark']_&]:bg-blue-600/45" />
            <Sparkles className="absolute left-[14%] top-[21%] h-8 w-8 fill-pink-400 text-pink-400 [html[data-theme='dark']_&]:fill-blue-500 [html[data-theme='dark']_&]:text-blue-500" />
            <Sparkles className="absolute right-[19%] top-[11%] h-10 w-10 fill-pink-300 text-pink-300 [html[data-theme='dark']_&]:fill-blue-500 [html[data-theme='dark']_&]:text-blue-500" />
            <Sparkles className="absolute bottom-[28%] left-[46%] h-8 w-8 fill-pink-400 text-pink-400 [html[data-theme='dark']_&]:fill-blue-500 [html[data-theme='dark']_&]:text-blue-500" />
          </div>

          <motion.div
            className={heroContainerStyles}
            initial="hidden"
            animate="visible"
            variants={entranceContainer}
          >
            <motion.div className={heroContentStyles} variants={entranceContainer}>
              <motion.p className={heroGreetingStyles} variants={entranceItem}>
                {heroData.greeting}
                <Sparkles className="h-8 w-8 fill-pink-400 text-pink-400 [html[data-theme='dark']_&]:fill-blue-500 [html[data-theme='dark']_&]:text-blue-500" />
              </motion.p>

              <motion.h1 className={heroNameStyles} variants={entranceItem}>
                {firstName}{" "}
                <span className={heroNameAccentStyles}>{lastName}</span>
              </motion.h1>

              <motion.p className={heroRoleStyles} variants={entranceItem} aria-live="polite">
                {typedRole}
                <span className={heroCursorStyles}>|</span>
              </motion.p>

              <motion.div className={heroAccentRuleStyles} variants={entranceItem} />

              <motion.p className={heroTaglineStyles} variants={entranceItem}>
                {heroData.tagline}
              </motion.p>

              <motion.div className={heroButtonRowStyles} variants={entranceItem}>
                <a className={heroPrimaryCtaStyles} href={heroData.primaryCTA.href}>
                  {heroData.primaryCTA.label}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>

                <a className={heroSecondaryCtaStyles} href={heroData.secondaryCTA.href} download>
                  {heroData.secondaryCTA.label}
                  <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
              </motion.div>

              <motion.ul className={heroSocialListStyles} variants={entranceItem} aria-label="Social links">
                {visibleSocialLinks.map((link) => {
                  const SocialIcon = socialIcons[link.id];

                  return (
                    <li key={link.id}>
                      <a
                        className={heroSocialLinkStyles}
                        href={link.href}
                        aria-label={link.label}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <SocialIcon className="h-7 w-7" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </motion.ul>
            </motion.div>

            <motion.div
              className={heroImageWrapperStyles}
              variants={entranceItem}
            >
              <motion.div
                className={heroPortraitFrameStyles}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  className={heroPortraitStyles}
                  src={profileImage}
                  alt="Gayathri Palraj"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className={heroStatsStyles}
            initial="hidden"
            animate="visible"
            variants={entranceContainer}
          >
            {heroData.highlights.map((highlight) => {
              const HighlightIcon = highlightIcons[highlight.icon];

              return (
                <motion.article
                  className={heroStatItemStyles}
                  key={highlight.id}
                  variants={entranceItem}
                >
                  <HighlightIcon className={`${heroStatIconStyles} h-10 w-10`} aria-hidden="true" />
                  <h2 className={heroStatTitleStyles}>{highlight.title}</h2>
                  <p className={heroStatDescriptionStyles}>{highlight.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
