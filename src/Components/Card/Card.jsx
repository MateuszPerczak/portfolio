import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    width: calc(100vw);
    height: calc(100vh);
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
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledCard;
