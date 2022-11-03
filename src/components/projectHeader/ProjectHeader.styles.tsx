import styled from "@emotion/styled";

const StyledProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 0 1 30%;
  padding: 16px;
  @media (max-width: 768px) and (min-width: 350px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  background-color: ${({ theme: { projectHeader } }) => projectHeader};
`;

export const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) and (min-width: 350px) {
    align-items: flex-start;
  }
`;

export const StyledProjectTitle = styled.span`
  font-size: clamp(1.2rem, 4vw, 2rem);
  font-weight: bold;
`;

export const StyledProjectType = styled.span`
  font-size: clamp(1rem, 3vw, 1.2rem);
`;

export default StyledProjectHeader;
