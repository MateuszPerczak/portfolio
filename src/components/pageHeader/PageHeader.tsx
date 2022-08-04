import type { FC } from "react";
import StyledPageHeader, { StyledPageDescription } from "./PageHeader.style";
import type PageHeaderProps from "./PageHeader.types";

const PageHeader: FC<PageHeaderProps> = ({
  header,
  description,
}: PageHeaderProps): JSX.Element => {
  return (
    <StyledPageHeader>
      <StyledPageDescription>{header}</StyledPageDescription>
      <h1>{description}</h1>
    </StyledPageHeader>
  );
};

export default PageHeader;
