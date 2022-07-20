import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type {
  ElementType,
  DetailedHTMLProps,
  HTMLAttributes,
  RefAttributes,
} from "react";
import type { LinkProps } from "react-router-dom";

export type NavButtonProps = {
  icon: string;
  name: string;
  path: string;
};

export type NavButtonTextComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

type NavButtonComponent = StyledComponent<
  LinkProps &
    RefAttributes<HTMLAnchorElement> & {
      theme?: Theme;
    },
  {},
  Record<string, unknown>
>;

export default NavButtonComponent;
