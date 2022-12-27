import styled from "@emotion/styled";

const StyledNavButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 200ms;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { navButton } }): string => navButton};
  }
`;

export default StyledNavButton;
