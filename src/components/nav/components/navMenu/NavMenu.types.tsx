import type { MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren, RefAttributes } from "react";

export type NavMenuProps = PropsWithChildren<{
  isMenuOpen: boolean;
}> &
  HTMLAttributes<HTMLDivElement> &
  MotionProps &
  RefAttributes<HTMLDivElement>;
