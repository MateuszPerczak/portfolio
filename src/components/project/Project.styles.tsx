import styled from "@emotion/styled";

const StyledProject = styled.div`
  width: calc(100% - 2rem);
  height: 400px;
  max-width: 1000px;
  background-color: ${({ theme: { project } }) => project};
`;

export default StyledProject;
