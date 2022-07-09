import styled from "@emotion/styled";

export const StyledComboboxLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  flex: 1;
  &:hover {
    background: ${({ theme: { navbar } }) => {
      return navbar;
    }};
  }
`;
