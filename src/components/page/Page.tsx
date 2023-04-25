import styled from "@emotion/styled";

const Page = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  overflow: hidden;
  border-left: 2px solid ${({ theme: { border } }): string => border};
  border-right: 2px solid ${({ theme: { border } }): string => border};
`;
export default Page;
