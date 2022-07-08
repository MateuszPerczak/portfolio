import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type CardDiv = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
>;

const StyledCard: CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
  width: min(90vw - 10px, 1000px);
  height: min(70vh - 1rem, 700px);
  border-radius: 10px;
  overflow: hidden;
  transition: width 100ms, height 100ms;
  box-shadow: 0 0 15px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
  background: ${({ theme: { card } }) => {
    return card;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledCard;
