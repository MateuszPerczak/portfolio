import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
  font-family: "Poppins";
  background-color: ${({ theme: { navbar } }) => navbar};
  box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow};
  border: 2px solid transparent;
  backdrop-filter: blur(30px) saturate(240%);
  transition: border 200ms;
  &:hover {
    border: 2px solid ${({ theme: { accent } }) => accent};
  }
`;

export const StyledProjectHeader = styled.header`
  font-weight: bold;
  font-size: clamp(1rem, 2vmax, 1.4rem);
  padding: 10px 20px;
`;

export const StyledProjectDescription = styled.section`
  flex: 1;
  padding: 20px;
  backdrop-filter: blur(30px) saturate(240%);
`;

export const StyledProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  backdrop-filter: blur(30px) saturate(240%);
`;

export const StyledProjectLibs = styled.div`
  color: ${({ theme: { description } }) => description};
  padding: 0 20px;
  backdrop-filter: blur(30px) saturate(240%);
`;

export const StyledProjectLink = styled.a`
  color: ${({ theme: { color } }) => color};
  transition: color 200ms;
  &:hover {
    color: ${({ theme: { accent } }) => accent};
  }
`;

export default StyledProject;
