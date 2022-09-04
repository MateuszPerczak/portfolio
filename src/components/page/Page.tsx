import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Page = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex: 1 1 100%;
  margin-top: 60px;
  padding: 10px;
`;

export default Page;
