import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbarItem = styled(motion.div)`
  font-size: clamp(0.9rem, 2vmax, 1.5rem);
  color: gray;
  padding: 10px;

  &:hover {
    color: ${({ theme: { accent } }) => accent};
  }
`;

export default StyledNavbarItem;
