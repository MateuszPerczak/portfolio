import type { MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type FlexContainerProps = PropsWithChildren<StyledFlexContainerProps>;

export type StyledFlexContainerProps = {
  flexRow?: boolean;
  flexColumn?: boolean;
  flexWrap?: boolean;
  gap?: number;
} & MotionProps;

export default FlexContainerProps;
