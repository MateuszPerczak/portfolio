import styled from "@emotion/styled";

const StyledAnimatedProject = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 20px;
  /* background-color: #212121; */
  border-radius: 5px;
  aspect-ratio: 3/2;
  border: 1px solid ${({ theme: { border } }): string => border};
  background-color: ${({ theme: { background } }): string => background};
  &:hover {
    background-color: ${({ theme: { border } }): string => border};
  }
  transition: background-color 200ms;
`;

export default StyledAnimatedProject;
