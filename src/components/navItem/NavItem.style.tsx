import styled from "@emotion/styled";

const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: min(3vmin, 1rem);
  flex: 1;
  height: 100%;
  user-select: none;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { accent } }) => accent};
    box-shadow: 0 0 5px #00000033;
  }
`;

export default StyledNavItem;
