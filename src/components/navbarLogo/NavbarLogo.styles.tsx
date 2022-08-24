import styled from "@emotion/styled";

const StyledNavbarLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: ${({ theme: { logo } }) => logo};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default StyledNavbarLogo;
