import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (min-width: 768px) {
    min-width: 350px;
  }
  font-family: "Poppins";
  background-color: ${({ theme: { navbar } }) => navbar};
  box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow};
  backdrop-filter: blur(30px) saturate(240%);
`;

export const StyledProjectHeader = styled.header`
  font-weight: bold;
  font-size: clamp(1rem, 2vmax, 1.4rem);
  padding: 10px 20px;
  font-family: "Caros";
`;

export const StyledProjectDescription = styled.section`
  flex: 1;
  padding: 20px;
  backdrop-filter: blur(30px) saturate(240%);
  font-size: clamp(0.8rem, 2vmax, 1rem);
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
  text-decoration: none;
  transition: color 200ms, background-color 200ms;
  color: ${({ theme: { color } }) => color};
  &:hover {
    color: ${({ theme: { accent } }) => accent};
  }
`;

export default StyledProject;
