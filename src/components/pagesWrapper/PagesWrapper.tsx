import type { FC } from "react";
import StyledPagesWrapper from "./PagesWrapper.styles";
import type PagesWrapperProps from "./PagesWrapper.types";

const PagesWrapper: FC<PagesWrapperProps> = ({ children }): JSX.Element => {
  return <StyledPagesWrapper>{children}</StyledPagesWrapper>;
};

export default PagesWrapper;
