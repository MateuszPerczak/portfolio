import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type StyledLinkComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  Record<string, unknown>
>;

const StyledLink: StyledLinkComponent = styled.a`
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;

export default StyledLink;
