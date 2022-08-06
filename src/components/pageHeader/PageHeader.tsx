import type { Variants } from "framer-motion";
import type { FC } from "react";
import StyledPageHeader, {
  StyledPageDescription,
  StyledPageSubHeader,
} from "./PageHeader.style";
import type PageHeaderProps from "./PageHeader.types";

const PageHeader: FC<PageHeaderProps> = ({
  header,
  description,
}: PageHeaderProps): JSX.Element => {
  const descriptionVariants: Variants = {
    offscreen: {
      x: "-100%",
      opacity: 0,
    },
    onscreen: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <StyledPageHeader
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "all" }}
    >
      <StyledPageDescription variants={descriptionVariants}>
        {header}
      </StyledPageDescription>
      <StyledPageSubHeader variants={descriptionVariants}>
        {description}
      </StyledPageSubHeader>
    </StyledPageHeader>
  );
};

export default PageHeader;
