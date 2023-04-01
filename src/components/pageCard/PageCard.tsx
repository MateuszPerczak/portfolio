import { transition } from "./PageCard.animations";
import StyledPageCard from "./PageCard.styles";
import type { PageCardProps } from "./PageCard.types";

const PageCard = ({ children, ...rest }: PageCardProps): JSX.Element => {
  return (
    <StyledPageCard {...rest} variants={transition}>
      {children}
    </StyledPageCard>
  );
};

export default PageCard;
