import styled from "@emotion/styled";

const LinkWrapper = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 4px;
  transition: border 200ms;
  text-decoration: none;
  min-width: 95px;
  @media (min-width: 350px) {
    min-width: 350px;
  }
  @media (min-width: 1000px) {
    min-width: 400px;
  }
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

const LibrariesWrapper = styled.div`
  font-size: 0.8rem;
  padding: 5px 10px;
  border-top: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  color: ${({ theme: { colorLight } }) => {
    return colorLight;
  }};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 10px;
`;

const TextWrapper = styled.div`
  font-size: 0.9rem;
`;

const ProjectCard = ({ title, description, lib, lang, href }) => {
  return (
    <LinkWrapper href={href}>
      <InfoWrapper>
        <h1>{title}</h1>
        <TextWrapper>{description}</TextWrapper>
      </InfoWrapper>
      <LibrariesWrapper>
        <p>Język: {lang}</p>
        <p>Biblioteki i frameworki: {lib}</p>
      </LibrariesWrapper>
    </LinkWrapper>
  );
};

export default ProjectCard;
