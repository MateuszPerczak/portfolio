import type { FC } from "react";
import StyledPageHeader from "./PageHeader.styles";
import type PageHeaderProps from "./PageHeader.types";

const PageHeader: FC<PageHeaderProps> = ({ header }): JSX.Element => {
  return (
    <StyledPageHeader
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
    >
      {header}
    </StyledPageHeader>
  );
};

export default PageHeader;
