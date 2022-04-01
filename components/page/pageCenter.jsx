import styled from "@emotion/styled";

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  height: 100vh;
`;

const PageCenter = ({ children }) => {
  return <DivWrapper>{children}</DivWrapper>;
};

export default PageCenter;
