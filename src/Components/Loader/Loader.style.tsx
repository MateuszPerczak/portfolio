import { animated } from "react-spring";
import styled, { StyledComponent } from "@emotion/styled";
import { Theme } from "@emotion/react";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type LoaderDiv = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export const StyledLoader: LoaderDiv = styled.div`
  display: grid;
  place-items: center;
  flex: 1;
  overflow: hidden;
  user-select: none;
  @media (max-width: 500px) {
    margin-left: 60px;
  }
`;

export const AnimatedLoader = styled(animated.div)`
  display: grid;
  place-items: center;
  font-size: 3rem;
`;
