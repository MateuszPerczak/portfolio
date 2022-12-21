import styled from "@emotion/styled";

const StyledNavLogo = styled.div`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme: { accent } }): string => accent};
`;

export default StyledNavLogo;
