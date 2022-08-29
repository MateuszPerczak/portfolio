import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  width: 100%;
  height: 90px;
  font-size: clamp(0.8rem, 5vw, 1.4rem);
  font-weight: bold;
  background-color: ${({ theme: { color } }) => color};
  color: ${({ theme: { background } }) => background};
`;

export default StyledFooter;
