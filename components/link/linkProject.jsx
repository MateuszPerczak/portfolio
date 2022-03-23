import styled from "@emotion/styled";

const LinkWrapper = styled.a`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
  text-decoration: none;
  border-radius: 4px;
  transition: border 150ms;
  min-width: 350px;
  @media (max-width: 460px) {
    min-width: fit-content;
  }

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

const HeaderWrapper = styled.div`
  padding: 10px;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DescriptionWrapper = styled.div`
  font-size: 0.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const LangWrapper = styled.div`
  font-size: 0.8rem;
  padding: 5px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  border-top: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  color: ${({ theme: { colorLight } }) => {
    return colorLight;
  }};
`;

const LinkProject = ({ href, header, description, lang, libs, ...rest }) => {
  return (
    <LinkWrapper href={href} {...rest}>
      <HeaderWrapper>
        <h1>{header}</h1>
        <DescriptionWrapper>{description}</DescriptionWrapper>
      </HeaderWrapper>
      <LangWrapper>
        <p>Język: {lang}</p>
        <p>Biblioteki i frameworki: {libs}</p>
      </LangWrapper>
    </LinkWrapper>
  );
};

export default LinkProject;
