import styled from "@emotion/styled";

const StyleWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const PageVariableView = ({ children }) => {
  return <StyleWrapper>{children}</StyleWrapper>;
};

export default PageVariableView;
