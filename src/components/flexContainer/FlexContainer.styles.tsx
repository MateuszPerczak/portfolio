import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { StyledFlexContainerProps } from "./FlexContainer.types";

const StyledFlexContainer = styled(motion.div)<StyledFlexContainerProps>`
  display: flex;
  flex-direction: ${({ flexColumn, flexRow }) =>
    flexColumn ? "column" : flexRow ? "row" : "row"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
  gap: ${({ gap }) => (gap ? `${gap}px` : "0px")};
`;

export default StyledFlexContainer;
