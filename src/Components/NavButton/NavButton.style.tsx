import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

export const StyledNavButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 13px;
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

type NavButtonComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

export const NavButtonText: NavButtonComponent = styled.span`
  font-size: 15px;
`;
