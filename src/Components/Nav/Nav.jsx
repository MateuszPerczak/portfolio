import styled from "@emotion/styled";
import pages from "../../Pages/pages";
import { useTransition } from "react-spring";
import NavButton from "../NavButton/NavButton";
import Icon from "../Icon/Icon";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 50px;
  padding: 5px;
  border-radius: 8px 0 0 8px;
  height: fit-content;
  z-index: 2;
  backdrop-filter: blur(10px) saturate(180%);
  background-color: ${({ theme: { nav } }) => {
    return nav;
  }};
`;

const Nav = () => {
  const animatedNavButtons = useTransition(pages, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
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
