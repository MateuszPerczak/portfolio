import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAboutContent = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex: 1 1 75%;
  width: 100%;
`;

export default StyledAboutContent;
