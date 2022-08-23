import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import NavButtonComponent, { NavButtonTextComponent } from "./NavButton.types";

export const StyledNavButton: NavButtonComponent = styled(Link)`
  display: flex;
  align-items: center;
  gap: 11px;
  flex-wrap: nowrap;
  white-space: nowrap;
  width: 100%;
  min-width: 39px;
  height: 39px;
  border-radius: 10px;
  font-size: 18px;
  padding-left: 11px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 200ms;
  color: ${({ theme: { color } }) => {
    return color;
  }};
  &:hover {
    background-color: ${({ theme: { hamburger } }) => {
      return hamburger;
    }};
  }
  &:active {
    background-color: ${({ theme: { background } }) => {
      return background;
    }};
  }
`;

export const NavButtonText: NavButtonTextComponent = styled.span`
  font-size: 15px;
`;
