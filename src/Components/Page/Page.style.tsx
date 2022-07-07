import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";
import { animated } from "react-spring";

type StyledPageComponent = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
>;

type StyledHeaderComponent = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  {}
>;

export const StyledPage: StyledPageComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  &:hover {
    overflow-y: auto;
  }
`;

export const StyledHeader: StyledHeaderComponent = styled.header`
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

export const StyledChildren = styled(animated.div)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
