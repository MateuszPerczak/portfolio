import styled from "@emotion/styled";

const StyledNavbarLogo = styled.div`
  font-size: clamp(0.8rem, 1.8vmax, 1.2rem);
  font-weight: bold;
  padding: 10px;
  background-color: ${({ theme: { accent } }) => accent};
  color: ${({ theme: { background } }) => background};
`;

export default StyledNavbarLogo;
