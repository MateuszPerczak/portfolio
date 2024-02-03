import type { MotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

export type AnimationProviderProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;
