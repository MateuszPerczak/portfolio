import type { FC } from "react";
import StyledPageSection, { StyledPageContent } from "./PageSection.style";
import type PageSectionProps from "./PageSection.types";

const PageSection: FC<PageSectionProps> = ({
  header,
  children,
}: PageSectionProps): JSX.Element => {
  return (
    <StyledPageSection>
      <h2>{header}</h2>
      <StyledPageContent>{children}</StyledPageContent>
    </StyledPageSection>
  );
};

export default PageSection;
