import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 20px;
  width: 100%;
  font-size: 1.2rem;
  background-color: ${({ theme: { accent } }) => accent};
  color: ${({ theme: { background } }) => background};
`;

export default StyledFooter;
