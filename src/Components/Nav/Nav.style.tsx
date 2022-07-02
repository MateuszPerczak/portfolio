import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  height: 100%;
  width: 60px;
  user-select: none;
  background: ${({ theme: { navbar } }) => {
    return navbar;
  }};
  border-right: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledNav;
