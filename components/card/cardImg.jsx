import styled from "@emotion/styled";

const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgWrapper = styled.img`
  max-width: 150px;
  width: 100%;
  height: auto;
  border-radius: 50%;
  user-select: none;
  border: 2px solid
    ${({ theme: { borderDark } }) => {
      return borderDark;
    }};
`;

const CardImg = ({ src, alt }) => {
  return (
    <DivWrapper>
      <ImgWrapper src={src} alt={alt}></ImgWrapper>
    </DivWrapper>
  );
};

export default CardImg;
