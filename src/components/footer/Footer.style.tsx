import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  padding: 20px;
  width: 100%;
  background-color: ${({ theme: { accent } }) => accent};
`;

export default StyledFooter;
