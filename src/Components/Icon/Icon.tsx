import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";

type IconComponent = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: React.ElementType<any> | undefined;
  },
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
  {}
>;

const Icon: IconComponent = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
`;

export default Icon;
