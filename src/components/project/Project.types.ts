import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

export type ProjectProps = {
  image: string;
  name: string;
  type: ProjectType;
  links?: {
    demo?: string;
    repository?: string;
  };
} & HTMLAttributes<HTMLDivElement> &
  MotionProps;

export type ProjectType = "web" | "desktop";
