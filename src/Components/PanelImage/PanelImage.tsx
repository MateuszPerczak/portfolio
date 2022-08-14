import { FC } from "react";
import {
  StylePanelImage,
  StyledlImg,
  StyledImgWrapper,
} from "./PanelImage.style";

type PanelImageProps = {
  src: string;
  alt: string;
  description: string;
};

const PanelImage: FC<PanelImageProps> = ({
  src,
  alt,
  description,
}: PanelImageProps): JSX.Element => {
  return (
    <StylePanelImage>
      <StyledImgWrapper>
        <StyledlImg src={src} alt={alt} />
      </StyledImgWrapper>
      <span>{description}</span>
    </StylePanelImage>
  );
};

export default PanelImage;
