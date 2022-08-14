import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

type SkillProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    header?: string;
    description?: string;
  };

export default SkillProps;
