import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledNavButton = styled(Link)`
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
  padding-left: 10px;
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

export const NavButtonText = styled.span`
  font-size: 15px;
`;
