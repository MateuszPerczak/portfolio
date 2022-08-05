import styled from "@emotion/styled";

const Page = styled.div`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { background } }) => background};
`;

export default Page;
