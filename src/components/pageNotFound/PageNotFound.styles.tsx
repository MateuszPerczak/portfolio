import styled from "@emotion/styled";
import { ReactComponent as Exclamation } from "@icons/exclamation.svg";
import { motion } from "framer-motion";

const StyledPageNotFound = styled(motion.section)`
  display: grid;
  place-items: center;
  flex: 1 0 100%;
  padding-bottom: 60px;
  .not-found-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 0.5rem;
  }
`;

export const StyledExclamation = styled(Exclamation)`
  font-size: 2rem;
  color: ${({ theme: { warning } }): string => warning};
`;

export default StyledPageNotFound;
