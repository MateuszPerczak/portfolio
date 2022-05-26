import styled from "@emotion/styled";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 500px) {
    position: fixed;
    margin-left: 60px;
    height: calc(100vh - 5px);
    width: calc(100vw - 60px);
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { background } }) => {
      return background;
    }};
  }
  &:hover {
    overflow-y: auto;
    ::-webkit-scrollbar-thumb {
      background: ${({ theme: { backgroundLight } }) => {
        return backgroundLight;
      }};
    }
  }
`;

export default StyledPage;
