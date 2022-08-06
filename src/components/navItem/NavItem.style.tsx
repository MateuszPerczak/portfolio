import styled from "@emotion/styled";

const StyledNavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  white-space: nowrap;
  font-size: 1.3rem;
  transition: background-color 200ms;
  color: ${({ theme: { color } }) => color};
  text-decoration: none;
  cursor: none;
  &:hover {
    background-color: ${({ theme: { accent } }) => accent};
  }
`;

export default StyledNavItem;
