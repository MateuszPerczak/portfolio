import styled from "@emotion/styled";

const StyledProjectButton = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledProjectButton;
