import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";

import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";

import Link from "../Components/Link/Link";

import projects from "../Data/projects.json";

const Projects: FC = (): JSX.Element => {
  const { t } = useTranslation("projects");

  return (
    <Page header={t("projects")}>
      {projects.map((project, index) => {
        return (
          <Panel key={index}>
            <PanelHeader header={project.header} icon="&#xECAA;" />
            <PanelContent>dsds</PanelContent>
          </Panel>
        );
      })}
    </Page>
  );
};

export default Projects;
