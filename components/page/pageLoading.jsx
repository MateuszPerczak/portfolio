import styled from "@emotion/styled";

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  animation: ping 800ms ease-out both;
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
      z-index: 4;
      filter: blur(0);
    }
    60% {
      transform: scale(1.3);
      opacity: 1;
      z-index: 4;
      filter: blur(0);
    }
    80% {
      transform: scale(1.2);
      opacity: 1;
      z-index: 4;
      filter: blur(0);
    }

    100% {
      transform: scale(2);
      opacity: 0;
      z-index: -1;
      filter: blur(0.5rem);
    }
  }
`;

const IconWrapper = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 8rem;
`;

const PageLoading = () => {
  return (
    <DivWrapper>
      <IconWrapper>&#xE121;</IconWrapper>
    </DivWrapper>
  );
};

export default PageLoading;
