import type { MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type ArticleProps = PropsWithChildren &
  MotionProps & {
    useAccent?: boolean;
    flexRow?: boolean;
    flexColumn?: boolean;
  };

export default ArticleProps;
