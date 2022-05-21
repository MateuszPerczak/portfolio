import styled from "@emotion/styled";

const StyledIcon = styled.span`
  user-select: none;
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: ${({ size }) => {
    return size;
  }}rem;
`;

const Icon = ({ size = 1.1, ...rest }) => {
  return <StyledIcon size={size} {...rest} />;
};

export default Icon;
