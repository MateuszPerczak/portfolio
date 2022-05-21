import styled from "@emotion/styled";
import PanelHeader from "./PanelHeader";
import PanelContent from "./PanelContent";
import PanelLink from "./PanelLink";
import Text from "../Text/Text";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  flex-grow: 1;
  border-radius: 10px;
  min-width: 200px;
  transition: box-shadow 300ms;
  background: ${({ theme: { backgroundLight, background } }) => {
    return `linear-gradient(45deg, ${backgroundLight}, ${background})`;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const StyledText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  line-height: 1.5;

  border-radius: 0 0 10px 10px;
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

const PanelProject = ({ href, header, description, lang, website = "" }) => {
  return (
    <StyledPanel>
      <PanelHeader header={header} icon="&#xECAA;" />
      <PanelContent flexDirection="row" flexWrap="wrap" flexGrow={1}>
        <Text fontSize={0.9}>{description}</Text>
      </PanelContent>
      <PanelContent flexDirection="row" flexWrap="wrap">
        <PanelLink href={href}>Github</PanelLink>
        {website && <PanelLink href={website}>Website</PanelLink>}
      </PanelContent>
      <StyledText>
        <Text fontSize={0.8}>{lang}</Text>
      </StyledText>
    </StyledPanel>
  );
};

export default PanelProject;
