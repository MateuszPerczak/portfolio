import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type StylePanelImageComponent = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
>;

export const StylePanelImage: StylePanelImageComponent = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
  font-size: 0.9rem;
`;

type StyledlImgProps = {
  src: string;
  alt: string;
};

export const StyledlImg = styled.div<StyledlImgProps>`
  border-radius: 10px;
  min-width: 150px;
  min-height: 150px;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ src }) => {
    return `url(${src})`;
  }};
  border: 2px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export const StyledImgWrapper: StylePanelImageComponent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;
