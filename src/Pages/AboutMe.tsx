import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";

const AboutMe: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Page header={t("aboutMe")}>
      <Panel>
        <PanelHeader header="" icon="" />
        <PanelContent></PanelContent>
      </Panel>
    </Page>
  );
};

export default AboutMe;
