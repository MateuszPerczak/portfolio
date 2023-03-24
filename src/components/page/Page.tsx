import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Page = styled(motion.section)`
  display: flex;
  flex-direction: column;
  flex: 1 0 100%;
  gap: 10px;
  max-width: 1000px;
  padding: 10px;
`;

export default Page;
