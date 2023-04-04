import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavLogo = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 200ms;
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({ theme: { navItem } }): string => navItem};
  transition: background-color 200ms, color 200ms;
  &.active {
    color: ${({ theme: { navItemActive } }): string => navItemActive};
  }
  &:hover {
    background-color: ${({ theme: { border } }): string => border};
  }
`;

export default StyledNavLogo;
