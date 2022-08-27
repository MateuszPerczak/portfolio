import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledIntroContent = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 50%;
  width: 100%;
  font-size: 1.1rem;
  color: ${({ theme: { description } }) => description};
`;

export default StyledIntroContent;
