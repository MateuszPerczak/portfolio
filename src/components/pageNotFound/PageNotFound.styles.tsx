import styled from "@emotion/styled";
import { ReactComponent as Exclamation } from "@icons/exclamation.svg";
import { motion } from "framer-motion";

const StyledPageNotFound = styled.div`
  display: grid;
  place-items: center;
  flex: 1 0 100%;
  padding-bottom: 60px;
`;

export const StyledPageNotFoundWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 0.5rem;
`;

export const StyledExclamation = styled(Exclamation)`
  font-size: 2rem;
`;

export default StyledPageNotFound;
