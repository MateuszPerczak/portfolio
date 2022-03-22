import styled from "@emotion/styled";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  min-height: 100vh;
`;

const PageContent = ({ children }) => {
  return <DivWrapper>{children}</DivWrapper>;
};

export default PageContent;
