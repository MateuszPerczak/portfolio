import styled from "@emotion/styled";

export const StyledNavLink = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledNavLink;
