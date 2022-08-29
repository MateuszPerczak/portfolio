import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPage = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: clamp(250px, 100%, 1000px);
  height: 100%;
  padding: 20px;
  overflow-x: hidden;
`;

export default StyledPage;
