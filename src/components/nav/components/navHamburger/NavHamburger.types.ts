import type { MotionProps } from "framer-motion";
import type { DetailedHTMLProps, HTMLAttributes, RefAttributes } from "react";

export type NavHamburgerProps = {
  isMenuOpen: boolean;
} & MotionProps &
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  RefAttributes<HTMLButtonElement>;
