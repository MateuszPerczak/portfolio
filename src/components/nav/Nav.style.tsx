import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 70px;
  font-size: 2rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  /* border-bottom: 1px solid ${({ theme: { accent } }) => accent}; */
  /* box-shadow: 0 5px 20px #00000044; */
  background-color: ${({ theme: { navbar } }) => navbar};
  backdrop-filter: blur(30px) saturate(360%);
`;

export default StyledNav;
