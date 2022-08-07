import styled from "@emotion/styled";

const Page = styled.article`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme: { background } }) => background};
`;

export default Page;
