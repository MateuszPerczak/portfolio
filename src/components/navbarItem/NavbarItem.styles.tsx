import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbarItem = styled(motion.div)`
  font-size: clamp(0.8rem, 1.8vmax, 1.2rem);
  padding: 10px 20px;
  cursor: pointer;
  transition: color 200ms;
  white-space: nowrap;
  color: ${({ theme: { link } }) => link};
  &:hover {
    color: ${({ theme: { accent } }) => accent};
  }
`;

export default StyledNavbarItem;
