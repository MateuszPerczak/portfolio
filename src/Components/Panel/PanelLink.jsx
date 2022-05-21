import styled from "@emotion/styled";

const StyledLink = styled.a`
  text-decoration: underline;
  color: ${({ theme: { color } }) => {
    return color;
  }};
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Link = ({ target = "_blank", rel = "noopener noreferrer", ...rest }) => {
  return <StyledLink target={target} rel={rel} {...rest} />;
};

export default Link;
