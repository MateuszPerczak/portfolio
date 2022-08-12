import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  gap: 10px;
  top: 0;
  left: 0;
  height: clamp(60px, 10vmax, 90px);

  width: 100%;
  padding: 20px;
  z-index: 1;
  user-select: none;
  border-bottom: 2px solid ${({ theme: { accent } }) => accent};
  background-color: ${({ theme: { navbar } }) => navbar};
  backdrop-filter: blur(30px) saturate(240%);
`;

export default StyledNavbar;
