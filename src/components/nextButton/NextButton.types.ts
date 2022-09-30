import type { LinkProps } from "react-router-dom";

export type NextButtonProps = LinkProps & {
  text: string;
} & StyleProps;

export type StyleProps = {
  disabled?: boolean;
};
