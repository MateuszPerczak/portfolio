import { m } from "framer-motion";

import type { AnimationProviderProps } from "./AnimationProvider.types";

const AnimationProvider = ({
  children,
  ...rest
}: AnimationProviderProps): JSX.Element => {
  return <m.div {...rest}>{children}</m.div>;
};

export default AnimationProvider;
