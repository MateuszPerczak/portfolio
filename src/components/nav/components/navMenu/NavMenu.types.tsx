import type { MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren, RefAttributes } from "react";

export type NavMenuProps = PropsWithChildren<{
  isOpen: boolean;
  offset: number;
}> &
  HTMLAttributes<HTMLDivElement> &
  MotionProps &
  RefAttributes<HTMLDivElement>;
