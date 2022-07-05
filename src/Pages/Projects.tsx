import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";

const Projects: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return <Page header={t("projects")}>Projects</Page>;
};

export default Projects;
