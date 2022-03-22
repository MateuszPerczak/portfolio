import styled from "@emotion/styled";

const LinkWrapper = styled.a`
  padding: 10px;
  border-radius: 4px;
  transition: border 200ms;
  text-decoration: none;
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
  background: ${({ theme: { background, backgroundDark } }) => {
    return `linear-gradient(-45deg, ${background}, ${backgroundDark})`;
  }};
  &:hover {
    border: 1px solid
      ${({ theme: { borderDark } }) => {
        return borderDark;
      }};
  }
`;

const ProjectLink = ({ header, description, href }) => {
  return (
    <LinkWrapper href={href}>
      <h1>{header}</h1>
      <span>{description}</span>
    </LinkWrapper>
  );
};

export default ProjectLink;
