import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Header = styled(motion.h1)`
  font-weight: bold;
  font-size: clamp(1rem, 9vw, 5rem);
`;

export default Header;