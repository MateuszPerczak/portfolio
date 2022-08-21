import type { FC } from "react";
import StyledFlexContainer from "./FlexContainer.styles";
import type FlexContainerProps from "./FlexContainer.types";

const FlexContainer: FC<FlexContainerProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <StyledFlexContainer
      {...rest}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: "some" }}
    >
      {children}
    </StyledFlexContainer>
  );
};

export default FlexContainer;
