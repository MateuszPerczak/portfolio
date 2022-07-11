import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type NavHamburgerDiv = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

const StyledNavHamburger: NavHamburgerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  aspect-ratio: 1;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 200ms;
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

export default StyledNavHamburger;