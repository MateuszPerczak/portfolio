import styled from "@emotion/styled";

const StyledComboTheme = styled.div`
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

const ComboTheme = ({ value, name, onSelectionChange }) => {
  return (
    <StyledComboTheme onClick={() => onSelectionChange(value)}>
      {name}
    </StyledComboTheme>
  );
};

export default ComboTheme;
