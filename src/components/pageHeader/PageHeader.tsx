import type { FC } from "react";
import StyledPageHeader, {
  StyledPageDescription,
  StyledPageSubHeader,
} from "./PageHeader.styles";
import type PageHeaderProps from "./PageHeader.types";

const PageHeader: FC<PageHeaderProps> = ({
  header,
  description,
}: PageHeaderProps): JSX.Element => {
  return (
    <StyledPageHeader>
      <StyledPageDescription>{description}</StyledPageDescription>
      <StyledPageSubHeader>{header}</StyledPageSubHeader>
    </StyledPageHeader>
  );
};

export default PageHeader;
