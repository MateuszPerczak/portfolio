import type { MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

export type NavMenuProps = PropsWithChildren<{
  isOpen: boolean;
  offset: number;
}> &
  HTMLAttributes<HTMLDivElement> &
  MotionProps &
  React.RefAttributes<HTMLDivElement>;
