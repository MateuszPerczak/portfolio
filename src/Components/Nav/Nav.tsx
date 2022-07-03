import { FC } from "react";
import StyledNav from "./Nav.style";
import { useState } from "react";
import { useSpring } from "react-spring";

import NavHamburger from "../NavHamburger/NavHamburger";
import NavButton from "../NavButton/NavButton";

import routes from "../../Routes/routes";

const Nav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedNav = useSpring({
    width: isOpen ? "200px" : "60px",
    config: { mass: 1.1, tension: 300 },
  });

  return (
    <StyledNav style={animatedNav}>
      <NavHamburger
        isOpen={isOpen}
        onClick={() => setIsOpen((wasOpen) => !wasOpen)}
      />
      {routes.map((route, index) => {
        return <NavButton key={index} {...route} />;
      })}
    </StyledNav>
  );
};

export default Nav;
