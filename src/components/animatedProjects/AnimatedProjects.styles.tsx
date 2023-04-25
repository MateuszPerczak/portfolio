import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAnimatedProjects = styled(motion.section)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  .project-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  .projects-wrapper {
    display: grid;
    @media (max-width: 768px) {
      grid-template-columns: auto;
    }
    grid-template-columns: auto auto;
    gap: 10px;
    padding: 20px;
  }
`;

export default StyledAnimatedProjects;
