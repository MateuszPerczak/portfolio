import type { MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

export type NavMenuProps = PropsWithChildren<{
  isOpen: boolean;
}> &
  HTMLAttributes<HTMLDivElement> &
  MotionProps &
  React.RefAttributes<HTMLDivElement>;
