import styled from "@emotion/styled";

const StyledProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (max-width: 768px) and (min-width: 350px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const StyledProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledProjectTitle = styled.span`
  font-size: clamp(1.2rem, 4vw, 2.5rem);
  font-weight: bold;
`;

export const StyledProjectType = styled.span`
  font-size: clamp(1rem, 2vw, 1.5rem);
`;

export default StyledProjectHeader;
