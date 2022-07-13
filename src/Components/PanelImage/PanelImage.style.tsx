import styled from "@emotion/styled";
import PanelImageComponent, {
  ImageComponent,
  PanelImageWrapperComponent,
  ImageProps,
} from "./PanelImage.types";

export const StylePanelImage: PanelImageComponent = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
  font-size: 0.9rem;
`;

export const StyledlImg: ImageComponent = styled.div<ImageProps>`
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

export const StyledImgWrapper: PanelImageWrapperComponent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;
