import type { FC } from "react";

import { pageCardAnimation } from "./PageCard.animation";
import StyledPageCard from "./PageCard.styles";
import type { PageCardProps } from "./PageCard.types";

const PageCard: FC<PageCardProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <StyledPageCard {...rest} variants={pageCardAnimation}>
      {children}
    </StyledPageCard>
  );
};

export default PageCard;
