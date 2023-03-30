import type { FC } from "react";

import { transition } from "./PageCard.animations";
import StyledPageCard from "./PageCard.styles";
import type { PageCardProps } from "./PageCard.types";

const PageCard: FC<PageCardProps> = ({ children, ...rest }: PageCardProps) => {
  return (
    <StyledPageCard {...rest} variants={transition}>
      {children}
    </StyledPageCard>
  );
};

export default PageCard;
