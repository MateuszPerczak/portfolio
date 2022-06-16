import styled from "@emotion/styled";

const StyledComboTheme = styled.div`
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

const ComboTheme = ({ values, name, onSelectionChange }) => {
  return (
    <StyledComboTheme onClick={() => onSelectionChange(values.value)}>
      {name}
    </StyledComboTheme>
  );
};

export default ComboTheme;
