import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNavMenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 60px;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
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

export default StyledNavMenuItem;
