import styled from "@emotion/styled";

const LinkWrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 4px;
  transition: border 150ms;
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  background: ${({ theme: { background, backgroundDark } }) => {
    return `linear-gradient(-45deg, ${background}, ${backgroundDark})`;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
  &:hover {
    border: 1px solid
      ${({ theme: { borderDark } }) => {
        return borderDark;
      }};
  }
`;

const Link = ({ href, rel = "noopener noreferrer", children, ...rest }) => {
  return (
    <LinkWrapper href={href} rel={rel} {...rest}>
      {children}
    </LinkWrapper>
  );
};

export default Link;
