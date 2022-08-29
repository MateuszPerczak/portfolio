import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

type NavbarItemProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    header: string;
  };

export default NavbarItemProps;
