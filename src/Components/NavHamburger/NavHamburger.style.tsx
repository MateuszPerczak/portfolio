import styled from "@emotion/styled";

const StyledNavHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  aspect-ratio: 1;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { hamburger } }) => {
      return hamburger;
    }};
  }
  &:active {
    background-color: ${({ theme: { background } }) => {
      return background;
    }};
  }
`;

export default StyledNavHamburger;
