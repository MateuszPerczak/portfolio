import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledButton = styled(motion.a)`
  padding: 20px;
  background-color: ${({ theme: { card } }) => card};
  color: ${({ theme: { color } }) => color};
  text-decoration: none;
  letter-spacing: 0.2rem;
  border: 2px solid transparent;
  transition: border 200ms;
  &:hover {
    border: 2px solid ${({ theme: { accent } }) => accent};
  }
`;

export default StyledButton;
