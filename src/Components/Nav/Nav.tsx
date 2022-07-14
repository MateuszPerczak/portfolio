import { useMemo } from "react";
import type { FC } from "react";
import StyledNav from "./Nav.style";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavHamburger from "../NavHamburger/NavHamburger";
import NavButton from "../NavButton/NavButton";
import NavSpacer from "../NavSpacer/NavSpacer";
import routes, { RoutePosition } from "../../Routes/routes";

const Nav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navItems = useMemo(() => {
    return routes.reduce(
      (acc, { position, name, ...rest }) => {
        const { path } = rest;
        acc[position].push(<NavButton key={path} {...rest} name={t(name)} />);
        return acc;
      },
      {
        top: [],
        bottom: [],
      } as { [key in RoutePosition]: JSX.Element[] }
    );
  }, [t]);

  return (
    <StyledNav
      animate={{
        width: isOpen ? "200px" : "60px",
      }}
      transition={{ type: "spring", mass: 0.5, stiffness: 150, damping: 12 }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavHamburger
        isOpen={isOpen}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
      />
      {navItems.top}
      <NavSpacer />
      {navItems.bottom}
    </StyledNav>
  );
};

export default Nav;
