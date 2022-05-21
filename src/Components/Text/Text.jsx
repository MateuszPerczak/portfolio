import styled from "@emotion/styled";

const StyledText = styled.span`
  font-size: ${({ fontSize }) => {
    return fontSize;
  }}rem;
`;

export default StyledText;
