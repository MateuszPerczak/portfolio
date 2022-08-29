import type { MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren &
  MotionProps & {
    href: string;
  };

export default ButtonProps;
