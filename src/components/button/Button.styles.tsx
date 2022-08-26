import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  display: grid;
  place-items: center;
  padding: 10px 20px;
  width: clamp(100px, 40%, 300px);
  font-weight: bold;
  text-decoration: none;
  background-color: ${({ theme: { color } }) => color};
  color: ${({ theme: { background } }) => background};
`;

export default StyledButton;
