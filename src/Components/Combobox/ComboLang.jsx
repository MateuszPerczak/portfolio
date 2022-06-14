import styled from "@emotion/styled";
import { CircleFlag } from "react-circle-flags";

const StyledComboLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 10px;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  &:hover {
    background: ${({ theme: { backgroundDark } }) => {
      return backgroundDark;
    }};
  }
`;

const ComboLang = ({ value, name, onSelectionChange }) => {
  return (
    <StyledComboLang onClick={() => onSelectionChange(value)}>
      {name}
      <CircleFlag countryCode={value === "en" ? "gb" : value} height="18" />
    </StyledComboLang>
  );
};

export default ComboLang;
