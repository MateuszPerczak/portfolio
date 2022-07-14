import { motion } from "framer-motion";
import styled from "@emotion/styled";
import LoaderComponent from "./Loader.types";

export const StyledLoader: LoaderComponent = styled.div`
  display: grid;
  place-items: center;
  flex: 1;
  overflow: hidden;
  user-select: none;
  @media (max-width: 500px) {
    margin-left: 60px;
  }
`;

export const AnimatedLoader = styled(motion.div)`
  display: grid;
  place-items: center;
  font-size: 3rem;
`;
