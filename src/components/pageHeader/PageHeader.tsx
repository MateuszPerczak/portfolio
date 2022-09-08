import styled from "@emotion/styled";

const PageHeader = styled.header`
  display: flex;
  max-width: 1000px;
  flex: 0 1 20%;
  width: calc(100% - 2rem);
  padding: 2rem 1rem;
  font-size: clamp(1rem, 10vw, 2.5rem);
  font-weight: bold;
`;

export default PageHeader;
