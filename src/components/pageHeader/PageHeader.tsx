import { animatedHeader } from "@animations/header";
import type { FC } from "react";
import StyledPageHeader from "./PageHeader.styles";
import type PageHeaderProps from "./PageHeader.types";

const PageHeader: FC<PageHeaderProps> = ({ header }): JSX.Element => {
  return <StyledPageHeader variants={animatedHeader}>{header}</StyledPageHeader>;
};

export default PageHeader;
