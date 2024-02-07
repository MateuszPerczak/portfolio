import styled from "@emotion/styled";

const StyledNav = styled.nav`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 64px;
  user-select: none;
  z-index: 2;
  background-color: ${({ theme: { nav } }): string => nav};
  border-bottom: 2px solid ${({ theme: { border } }): string => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
  .nav-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    flex: 1 1 100%;
    padding: 0 20px;
    border-left: 2px solid ${({ theme: { border } }): string => border};
    border-right: 2px solid ${({ theme: { border } }): string => border};
  }
  .nav-buttons-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

// export const StyledNavWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 1000px;
//   flex: 1 1 100%;
//   padding: 0 20px;
//   border-left: 2px solid ${({ theme: { border } }): string => border};
//   border-right: 2px solid ${({ theme: { border } }): string => border};
// `;

// export const StyledNavWrapperButtons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

export default StyledNav;
