import styled from "@emotion/styled";

const StyledNavHamburger = styled.div`
  display: grid;
  place-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { accent } }): string => accent};
  &:hover {
    background-color: ${({ theme: { navButton } }): string => navButton};
  }
`;

export default StyledNavHamburger;
