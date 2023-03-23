import styled from "@emotion/styled";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 64px;
  user-select: none;
  z-index: 2;
  background-color: ${({ theme: { nav } }): string => nav};
  border-bottom: 2px solid ${({ theme: { border } }): string => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  flex: 1 1 100%;
  padding: 0 20px;
`;

export const StyledNavWrapperButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default StyledNav;
