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
    <StyledNav style={animatedNav}>
      <NavHamburger
        isOpen={isOpen}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
      />
      {routes.map((route, index) => {
        return <NavButton key={index} {...route} name={t(route.name)} />;
      })}
      <NavSpacer />
      <NavButton icon="&#xE115;" path="/" name={t("preferences")} />
    </StyledNav>
  );
};

export default Nav;
