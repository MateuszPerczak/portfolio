import styled from "@emotion/styled";

const ComboboxTheme = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  flex: 1;
  &:hover {
    background: ${({ theme: { navbar } }) => {
      return navbar;
    }};
  }
`;

export default ComboboxTheme;
