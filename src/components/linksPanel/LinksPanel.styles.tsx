import styled from "@emotion/styled";

import type { LinksPanelProps } from "./LinksPanel.types";

const StyledLinks = styled.div<Pick<LinksPanelProps, "justifyContent">>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  .links-wrapper {
    display: flex;
    gap: 10px;
    flex-basis: 100%;
    justify-content: ${({ justifyContent }): string => justifyContent ?? "flex-start"};
    @media (max-width: 350px) {
      flex-direction: column;
    }
  }
  .links-title {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  color: ${({ theme: { link } }): string => link};
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid ${({ theme: { link } }): string => link};
  border-radius: 5px;
  transition: color 200ms, background-color 200ms, scale 200ms;
  &:hover {
    background-color: ${({ theme: { link } }): string => link};
    color: ${({ theme: { background } }): string => background};
  }
`;

export default StyledLinks;
