import { memo } from "react";

import StyledAnimationProvider from "./AnimationProvider.styles";
import type { AnimationProviderProps } from "./AnimationProvider.types";

const AnimationProvider = ({
  children,
  ...rest
}: AnimationProviderProps): JSX.Element => {
  return <StyledAnimationProvider {...rest}>{children}</StyledAnimationProvider>;
};

export default memo(AnimationProvider);
