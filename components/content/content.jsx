import styled from "@emotion/styled";

const StyleWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 80px;
  height: calc(100vh - 20px);
  box-shadow: 0 0 15px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
  width: calc(100vw - 90px);
  border-radius: 4px;
  overflow: auto;
  scroll-behavior: smooth;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const Content = ({ children }) => {
  return <StyleWrapper>{children}</StyleWrapper>;
};

export default Content;
