import type { FC } from "react";

import type { ContactProps } from "./Contact.types";

import { contactSectionStyles } from "./Contact.styles";

const Contact: FC<ContactProps> = ({
  className = "",
}) => {
  return (
    <section
      id="contact"
      className={`${contactSectionStyles} ${className}`.trim()}
    >
      Contact Section
    </section>
  );
};

export default Contact;