import { FC, PropsWithChildren } from "react";
import StyledCard from "./Card.style";

const Card: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
