import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

type ExperienceProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    header: string;
    description: string;
    date: string;
  };

export default ExperienceProps;
