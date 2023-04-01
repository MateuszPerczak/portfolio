import styled from "@emotion/styled";
import { motion } from "framer-motion";

import type { PageCardLayouts } from "./PageCard.types";

const StyledPageCard = styled(motion.section)<PageCardLayouts>`
  display: flex;
  position: relative;
  flex-direction: ${({ flexDirection }): string => flexDirection ?? "row"};
  align-items: ${({ alignItems }): string => alignItems ?? "flex-start"};
  gap: 10px;
  padding: clamp(20px, 10vw, 32px);
  /* border-radius: 10px; */
  overflow: hidden;

  /* border-bottom: 2px solid ${({ theme: { border } }): string => border}; */
  /* box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow}; */
`;

export default StyledPageCard;
