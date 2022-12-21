import styled from "@emotion/styled";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 60px;
  user-select: none;
  background-color: ${({ theme: { nav } }): string => nav};
  border-bottom: 1px solid ${({ theme: { border } }): string => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  flex: 1 1 100%;
  padding: 0 clamp(10px, 10vw, 40px);
`;

export default StyledNav;
