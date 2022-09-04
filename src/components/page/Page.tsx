import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Page = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1 1 100%;
  padding: 10px;
`;

export default Page;
