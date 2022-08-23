import { FC, memo } from "react";
import { useTranslation, UseTranslationResponse } from "react-i18next";
import Page from "../Components/Page/Page";
import PanelProject from "../Components/PanelProject/PanelProject";
import PanelWrapper from "../Components/PanelWrapper/PanelWrapper";
import projects from "../Data/projects.json";

const Projects: FC = (): JSX.Element => {
  const { t }: UseTranslationResponse<string> = useTranslation("projects");

  return (
    <Page header={t("projects")}>
      <PanelWrapper>
        {projects.map((project, index) => {
          return <PanelProject key={index} {...project} t={t} />;
        })}
      </PanelWrapper>
    </Page>
  );
};

export default memo(Projects);
