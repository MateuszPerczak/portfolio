import type { FC } from "react";

import StyledPageHeader from "./PageHeader.styles";
import type { PageHeaderProps } from "./PageHeader.types";

const PageHeader: FC<PageHeaderProps> = ({
  header,
  children,
}: PageHeaderProps): JSX.Element => {
  return (
    <StyledPageHeader>
      {header && <h1>{header}</h1>}
      {children}
    </StyledPageHeader>
  );
};

export default PageHeader;
