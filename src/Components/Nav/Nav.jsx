import styled from "@emotion/styled";
import pages from "./pages";
import { useTransition } from "react-spring";
import NavButton from "../NavButton/NavButton";
import Icon from "../Icon/Icon";

const StyledNav = styled.nav`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 50px;
  padding: 5px;
  border-radius: 8px;
  backdrop-filter: blur(10px) saturate(180%);
  background-color: ${({ theme: { nav } }) => {
    return nav;
  }};
`;

const Nav = () => {
  const animatedNavButtons = useTransition(pages, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    trail: 50,
    delay: 200,
    config: {
      mass: 1.5,
      tension: 420,
      friction: 30,
    },
    keys: (item) => item.id,
  });

  return (
    <StyledNav>
      {animatedNavButtons((style, page) => {
        return (
          <NavButton key={page.id} tooltip={page.name} style={style}>
            <Icon>{page.icon}</Icon>
          </NavButton>
        );
      })}
    </StyledNav>
  );
};

export default Nav;
