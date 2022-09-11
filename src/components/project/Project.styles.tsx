import styled from "@emotion/styled";

const StyledProject = styled.section`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  width: calc(100% - 2rem);
  height: 300px;
  max-width: 1000px;
  border-radius: 0.4rem;
  overflow: hidden;
  background-color: ${({ theme: { project } }) => project};
`;

export default StyledProject;
