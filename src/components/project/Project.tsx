import type { FC, PropsWithChildren } from "react";
import StyledProject from "./Project.style";

const Project: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledProject>{children}</StyledProject>;
};

export default Project;
