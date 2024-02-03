import type { MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren, RefAttributes } from "react";

export type NavMenuProps = PropsWithChildren<{
  isOpen: boolean;
}> &
  HTMLAttributes<HTMLDivElement> &
  MotionProps &
  RefAttributes<HTMLDivElement>;
