import type { FC } from "react";

import StyledPageCard from "./PageCard.styles";
import type { PageCardProps } from "./PageCard.types";

const PageCard: FC<PageCardProps> = ({ children, ...rest }): JSX.Element => {
  return <StyledPageCard {...rest}>{children}</StyledPageCard>;
};

export default PageCard;
