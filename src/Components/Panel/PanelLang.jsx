import styled from "@emotion/styled";

const StyledLang = styled.span`
  display: flex;
  padding: 10px;
  line-height: 1.5;
  border-radius: 0 0 10px 10px;
  font-size: ${({ fontSize }) => {
    return fontSize;
  }}rem;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  color: ${({ theme: { colorDark } }) => {
    return colorDark;
  }};
  border-top: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const PanelLang = ({ fontSize, ...rest }) => {
  return <StyledLang fontSize={fontSize} {...rest} />;
};

export default PanelLang;
