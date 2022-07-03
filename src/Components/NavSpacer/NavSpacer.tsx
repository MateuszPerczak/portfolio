import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type NavSpacerComponent = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
>;

const NavSpacer: NavSpacerComponent = styled.div`
  flex: 1;
`;

export default NavSpacer;
