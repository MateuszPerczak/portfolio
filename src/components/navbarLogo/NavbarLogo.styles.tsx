import styled from "@emotion/styled";

const StyledNavbarLogo = styled.div`
  font-size: clamp(1rem, 3vmax, 1.5rem);
  font-weight: bold;
  padding: 10px;
  font-family: "Caros";
  background-color: ${({ theme: { accent } }) => accent};
`;

export default StyledNavbarLogo;
