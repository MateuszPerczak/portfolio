import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type IconComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

const Icon: IconComponent = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
`;

export default Icon;
