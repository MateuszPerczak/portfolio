import styled from "@emotion/styled";
import { motion } from "framer-motion";
import PageComponent, { PageHeaderComponent } from "./Page.types";

export const StyledPage: PageComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 500px) {
    margin-left: 60px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { background } }) => {
      return background;
    }};
  }
  &:hover {
    overflow-y: auto;
    ::-webkit-scrollbar-thumb {
      background: ${({ theme: { scrollbar } }) => {
        return scrollbar;
      }};
    }
  }
`;

export const StyledHeader: PageHeaderComponent = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 75px;
  font-size: 1.5rem;
  padding-left: 1rem;
  backdrop-filter: blur(8px) saturate(180%);
  background: ${({ theme: { header } }) => {
    return header;
  }};
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export const StyledChildren = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
