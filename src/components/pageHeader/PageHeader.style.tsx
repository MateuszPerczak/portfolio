import styled from "@emotion/styled";

const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
`;

export const StyledPageDescription = styled.span`
  font-size: 1rem;

  color: ${({ theme: { accent } }) => accent};
`;

export default StyledPageHeader;
