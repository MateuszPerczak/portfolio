import styled from "@emotion/styled";

const StyledNavbarLogo = styled.div`
  font-size: clamp(0.1rem, 2vmax, 1.5rem);
  font-weight: bold;
  padding: 10px;
  background-color: ${({ theme: { accent } }) => accent};
`;

export default StyledNavbarLogo;
