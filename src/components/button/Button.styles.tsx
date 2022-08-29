import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  display: grid;
  place-items: center;
  padding: 10px 20px;
  font-size: clamp(0.8rem, 3vw, 1.4rem);
  width: clamp(40px, 30%, 300px);
  font-weight: bold;
  text-decoration: none;
  background-color: ${({ theme: { color } }) => color};
  color: ${({ theme: { background } }) => background};
`;

export default StyledButton;
