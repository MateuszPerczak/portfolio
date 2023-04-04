import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 5px;
  font-weight: bold;
  transition: color 200ms, background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { navItem } }): string => navItem};
  &.active {
    color: ${({ theme: { navItemActive } }): string => navItemActive};
  }
  &:hover {
    background-color: ${({ theme: { border } }): string => border};
  }
`;

export default StyledNavItem;
