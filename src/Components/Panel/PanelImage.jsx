import styled from "@emotion/styled";
import Text from "../Text/Text";

const StyledImage = styled.div`
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  background-image: ${({ src }) => {
    return `url(${src})`;
  }};
  border: 1px solid
    ${({ theme: { color } }) => {
      return color;
    }};

  min-width: ${({ size }) => {
    return size;
  }}px;
  max-height: ${({ size }) => {
    return size * 1.3;
  }}px;
  min-height: ${({ size }) => {
    return size;
  }}px;
`;

const StyledPanel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  @media (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

const StyledImgPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ImagePanel = ({ size, src, alt, description }) => {
  return (
    <StyledPanel>
      <StyledImgPanel>
        <StyledImage size={size} src={src} alt={alt} />
      </StyledImgPanel>
      <Text fontSize={0.9}>{description}</Text>
    </StyledPanel>
  );
};

export default ImagePanel;
