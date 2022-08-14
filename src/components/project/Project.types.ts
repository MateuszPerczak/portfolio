import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

type ProjectProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    header: string;
    description: string;
  };

export default ProjectProps;
