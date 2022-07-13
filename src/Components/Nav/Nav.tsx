import { useMemo } from "react";
import type { FC } from "react";
import StyledNav from "./Nav.style";
import { useState } from "react";
import { useSpring } from "react-spring";
import { useTranslation } from "react-i18next";
import NavHamburger from "../NavHamburger/NavHamburger";
import NavButton from "../NavButton/NavButton";
import NavSpacer from "../NavSpacer/NavSpacer";
import routes, { RoutePosition } from "../../Routes/routes";

const Nav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const animatedNav = useSpring({
    width: isOpen ? "200px" : "60px",
    config: { mass: 1.1, tension: 300 },
  });
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
    <StyledNav style={animatedNav} onMouseLeave={() => setIsOpen(false)}>
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
