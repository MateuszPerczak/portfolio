import styled from "@emotion/styled";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme: { background } }) => background};
  font-weight: bold;
  font-size: 8rem;
`;

export default Page;
