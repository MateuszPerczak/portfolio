import styled from "@emotion/styled";
import { ReactComponent as Exclamation } from "@icons/exclamation.svg";
import { motion } from "framer-motion";

const StyledPageNotFound = styled(motion.section)`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex: 1 1 100%;
  .not-found-wrapper {
    display: grid;
    place-items: center;
    flex: 1;
    max-width: 1000px;
    border-left: 2px solid ${({ theme: { border } }): string => border};
    border-right: 2px solid ${({ theme: { border } }): string => border};
    padding-bottom: 64px;
  }
  .not-found-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
  }
`;

export const StyledExclamation = styled(Exclamation)`
  font-size: 3rem;
  color: ${({ theme: { warning } }): string => warning};
`;

export default StyledPageNotFound;
