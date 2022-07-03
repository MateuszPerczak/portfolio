import { FC } from "react";
import StyledNav from "./Nav.style";
import { useState } from "react";
import { useSpring } from "react-spring";
import { useTranslation } from "react-i18next";
import NavHamburger from "../NavHamburger/NavHamburger";
import NavButton from "../NavButton/NavButton";
import NavSpacer from "../NavSpacer/NavSpacer";

import routes from "../../Routes/routes";

const Nav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedNav = useSpring({
    width: isOpen ? "200px" : "60px",
    config: { mass: 1.1, tension: 300 },
  });

  const { t } = useTranslation();

  return (
    <StyledNav style={animatedNav} onMouseLeave={() => setIsOpen(false)}>
      <NavHamburger
        isOpen={isOpen}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
      />
      {routes
        .filter((route) => route.position === "top")
        .map((route, index) => {
          return <NavButton key={index} {...route} name={t(route.name)} />;
        })}

      <NavSpacer />
      {routes
        .filter((route) => route.position === "bottom")
        .map((route, index) => {
          return <NavButton key={index} {...route} name={t(route.name)} />;
        })}
    </StyledNav>
  );
};

export default Nav;
