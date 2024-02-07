import { m } from "framer-motion";

import type { AnimationProviderProps } from "./AnimationProvider.types";

const AnimationProvider = (props: AnimationProviderProps): JSX.Element => (
  <m.div {...props} />
);

export default AnimationProvider;
