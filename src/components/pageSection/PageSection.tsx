import type { FC } from "react";
import StyledPageSection, {
  StyledPageContent,
  StyledPageHeader,
} from "./PageSection.style";
import type PageSectionProps from "./PageSection.types";

const PageSection: FC<PageSectionProps> = ({
  header,
  children,
}: PageSectionProps): JSX.Element => {
  return (
    <StyledPageSection
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: "some" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
    >
      <StyledPageHeader>{header}</StyledPageHeader>
      <StyledPageContent>{children}</StyledPageContent>
    </StyledPageSection>
  );
};

export default PageSection;
