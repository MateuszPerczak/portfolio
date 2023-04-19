import styled from "@emotion/styled";

const Page = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  max-width: 1000px;
  padding: 10px;
  overflow: hidden;
  border-left: 2px solid ${({ theme: { border } }): string => border};
  border-right: 2px solid ${({ theme: { border } }): string => border};
`;
export default Page;
