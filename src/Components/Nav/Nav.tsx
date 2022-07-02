import { FC } from "react";
import StyledNav from "./Nav.style";
import { useState } from "react";
import { useSpring } from "react-spring";

import NavHamburger from "../NavHamburger/NavHamburger";

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
    </StyledNav>
  );
};

export default Nav;
