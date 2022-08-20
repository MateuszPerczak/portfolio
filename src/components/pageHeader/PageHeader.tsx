import type { FC } from "react";
import StyledPageHeader, {
  StyledPageDescription,
  StyledPageSubHeader,
} from "./PageHeader.styles";
import type PageHeaderProps from "./PageHeader.types";
import { animatedHeaderItem, animatedHeader } from "@/animations/header";

const PageHeader: FC<PageHeaderProps> = ({
  header,
  description,
}: PageHeaderProps): JSX.Element => {
  return (
    <StyledPageHeader variants={animatedHeader}>
      <StyledPageDescription variants={animatedHeaderItem}>
        {description}
      </StyledPageDescription>
      <StyledPageSubHeader variants={animatedHeaderItem}>{header}</StyledPageSubHeader>
    </StyledPageHeader>
  );
};

export default PageHeader;
