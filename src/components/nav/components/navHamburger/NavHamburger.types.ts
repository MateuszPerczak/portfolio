import type { MotionProps } from "framer-motion";
import type { DetailedHTMLProps, HTMLAttributes, RefAttributes } from "react";

export type NavHamburgerProps = {
  isOpen: boolean;
} & MotionProps &
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> &
  RefAttributes<HTMLSpanElement>;
