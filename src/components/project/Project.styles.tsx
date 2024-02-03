import styled from "@emotion/styled";
import { motion } from "framer-motion";

import type { ProjectProps, ProjectType } from "./Project.types";

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1 1 400px;
  height: 300px;
  border: 1px solid ${({ theme: { border } }): string => border};
  border-radius: 5px;
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
  overflow: hidden;
  .project-image {
    flex: 1;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 15px 5px ${({ theme: { shadow } }): string => shadow};
    transition: transform 600ms ease-in-out;
  }
  .project-bottom {
    display: flex;
    padding: 10px;
    flex: 0 0 80px;
    gap: 10px;
    border-top: 1px solid ${({ theme: { border } }): string => border};
    background-color: ${({ theme: { border } }): string => border};
    @media (max-width: 400px) {
      flex-direction: column;
    }
  }
  .project-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
  }
  .project-name {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .project-links {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
    @media (max-width: 400px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme: { border } }): string => border};
  border-radius: 5px;
  background-color: ${({ theme: { border } }): string => border};
  color: ${({ theme: { link } }): string => link};
  text-decoration: none;
  padding: 0 10px;
  height: 36px;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { background } }): string => background};
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const StyledProjectType = styled.span<Pick<ProjectProps, "type">>`
  font-size: 0.8rem;
  color: ${({ theme: { web, desktop, link }, type }): string =>
    ((
      {
        desktop: desktop,
        web: web,
      } as Record<ProjectType, string>
    )[type] ?? link)};
`;

export default StyledProject;
