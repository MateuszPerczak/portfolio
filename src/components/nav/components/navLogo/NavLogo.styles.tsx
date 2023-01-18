import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavLogo = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 200ms;
  color: ${({ theme: { navItem } }): string => navItem};
  &.active {
    color: ${({ theme: { navItemActive } }): string => navItemActive};
  }
`;

export default StyledNavLogo;
