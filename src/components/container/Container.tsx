import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  max-width: 1000px;
`;

export default Container;
