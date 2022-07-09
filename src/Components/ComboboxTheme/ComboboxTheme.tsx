import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type ComboboxThemeDiv = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

const ComboboxTheme: ComboboxThemeDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  flex: 1;
  &:hover {
    background: ${({ theme: { navbar } }) => {
      return navbar;
    }};
  }
`;

export default ComboboxTheme;
