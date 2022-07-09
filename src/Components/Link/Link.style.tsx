import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type LinkA = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  Record<string, unknown>
>;

const StyledLink: LinkA = styled.a`
  color: ${({ theme: { color } }) => {
    return color;
  }};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default StyledLink;
