import styled from "@emotion/styled";
import ComboboxLangComponent from "./ComboboxLang.types";

export const StyledComboboxLang: ComboboxLangComponent = styled.div`
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
