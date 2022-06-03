import styled from "@emotion/styled";
import PanelHeader from "./PanelHeader";
import PanelLang from "./PanelLang";
import PanelContent from "./PanelContent";
import PanelLink from "./PanelLink";
import Text from "../Text/Text";
import { useTranslation } from "react-i18next";

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  flex-grow: 1;
  border-radius: 10px;
  min-width: 205px;
  transition: box-shadow 300ms, transform 300ms;
  background: ${({ theme: { backgroundLight, background } }) => {
    return `linear-gradient(45deg, ${backgroundLight}, ${background})`;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};

  &:hover {
    box-shadow: 0 0 15px 0
      ${({ theme: { shadow } }) => {
        return shadow;
      }};
    transform: translateY(-5px);
  }
`;

const PanelProject = ({ header, description, langs, links = [] }) => {
  const { t } = useTranslation("projects");

  return (
    <StyledPanel>
      <PanelHeader header={header} icon="&#xECAA;" />
      <PanelContent flexDirection="row" flexWrap="wrap" flexGrow={1}>
        <Text fontSize={0.9}>{t(description)}</Text>
      </PanelContent>
      <PanelContent flexDirection="row" flexWrap="wrap">
        {links.map((link, index) => {
          return (
            <PanelLink key={index} href={link.href}>
              {link.header}
            </PanelLink>
          );
        })}
      </PanelContent>
      <PanelLang fontSize={0.8}>{langs}</PanelLang>
    </StyledPanel>
  );
};

export default PanelProject;
