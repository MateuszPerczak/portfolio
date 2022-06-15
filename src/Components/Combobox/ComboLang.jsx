import styled from "@emotion/styled";
import { CircleFlag } from "react-circle-flags";

const StyledComboLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 5px 10px;
  border-radius: 10px;
  &:hover {
    background: ${({ theme: { hoverBlur } }) => {
      return hoverBlur;
    }};
    box-shadow: 0 0 5px 0
      ${({ theme: { shadow } }) => {
        return shadow;
      }};
  }
`;

const ComboLang = ({ values, name, onSelectionChange }) => {
  return (
    <StyledComboLang onClick={() => onSelectionChange(values.value)}>
      {name}
      <CircleFlag countryCode={values.flag} height="18" />
    </StyledComboLang>
  );
};

export default ComboLang;
