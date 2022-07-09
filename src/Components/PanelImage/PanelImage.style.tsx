import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelImageDiv = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

type StyledlImgProps = {
  src: string;
  alt: string;
};

type PanelImageDivProps = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  } & StyledlImgProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export const StylePanelImage: PanelImageDiv = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
  font-size: 0.9rem;
`;

export const StyledlImg: PanelImageDivProps = styled.div<StyledlImgProps>`
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

export const StyledImgWrapper: PanelImageDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;
