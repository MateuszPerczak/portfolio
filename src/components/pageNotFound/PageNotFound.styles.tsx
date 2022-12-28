import styled from "@emotion/styled";
import { ReactComponent as Bomb } from "@icons/bomb.svg";
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
  font-size: clamp(0.8rem, 5vw, 1.4rem);
`;

export const StyledBomb = styled(Bomb)`
  font-size: clamp(3rem, 20vw, 6rem);
`;

export default StyledPageNotFound;
