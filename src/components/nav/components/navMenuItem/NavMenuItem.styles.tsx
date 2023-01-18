import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavMenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 60px;
  padding: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: color 200ms;
  cursor: pointer;
  color: ${({ theme: { navItem } }): string => navItem};
  &.active {
    color: ${({ theme: { navItemActive } }): string => navItemActive};
  }
`;

export default StyledNavMenuItem;
