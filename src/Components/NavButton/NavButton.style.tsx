import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import {
  ElementType,
  DetailedHTMLProps,
  HTMLAttributes,
  RefAttributes,
} from "react";
import { Link, LinkProps } from "react-router-dom";

type NavButtonSpan = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

type NavButtonA = StyledComponent<
  LinkProps &
    RefAttributes<HTMLAnchorElement> & {
      theme?: Theme;
    },
  {},
  {}
>;

export const StyledNavButton: NavButtonA = styled(Link)`
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

export const NavButtonText: NavButtonSpan = styled.span`
  font-size: 15px;
`;
