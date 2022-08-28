import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  scroll-snap-align: center;
`;

export default Section;
