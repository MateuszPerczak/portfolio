import type { FC, PropsWithChildren } from "react";
import StyledPageHeader from "./PageHeader.style";

const PageHeader: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledPageHeader>{children}</StyledPageHeader>;
};

export default PageHeader;
