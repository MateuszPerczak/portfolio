import type { FC } from "react";
import { memo } from "react";
import StyledNav, { NavButtons, NavContent } from "./Nav.styles";
import Logo from "@components/logo/Logo";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavLink from "@components/navLink/NavLink";

const Nav: FC = (): JSX.Element => {
  return (
    <StyledNav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5,
        delay: 0.2,
      }}
    >
      <NavContent>
        <Logo />
        <NavButtons>
          <NavLink
            href="mailto:mateusz.perczak.mp@gmail.com"
            icon={faEnvelope}
            aria-label="Email"
          />
          <NavLink
            href="https://www.linkedin.com/in/mateuszperczak/"
            icon={faLinkedin}
            aria-label="LinkedIn"
          />
          <NavLink
            href="https://github.com/MateuszPerczak"
            icon={faGithub}
            aria-label="Github"
          />
        </NavButtons>
      </NavContent>
    </StyledNav>
  );
};

export default memo(Nav);
