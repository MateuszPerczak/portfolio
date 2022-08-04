import styled from "@emotion/styled";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 60px;
  width: 100%;
  height: calc(100vh - 70px);
  background-color: ${({ theme: { background } }) => background};
`;

export default Page;
