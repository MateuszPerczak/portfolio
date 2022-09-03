import type { FC } from "react";
import StyledNav, { NavButtons, NavContent } from "./Nav.styles";
import Logo from "@components/logo/Logo";
import NavButton from "@components/navButton/NavButton";

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
        delay: 0.5,
      }}
    >
      <NavContent>
        <Logo />
        <NavButtons>
          <NavButton>&#xE706;</NavButton>
          <NavButton>&#xE119;</NavButton>
        </NavButtons>
      </NavContent>
    </StyledNav>
  );
};

export default Nav;
