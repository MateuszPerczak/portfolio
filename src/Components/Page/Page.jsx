import styled from "@emotion/styled";

const Page = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 5px;
  border-radius: 8px;
  z-index: 1;
  backdrop-filter: blur(10px) saturate(180%);
  background-color: ${({ theme: { nav } }) => {
    return nav;
  }};
`;

export default Page;
