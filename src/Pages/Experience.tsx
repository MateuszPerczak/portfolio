import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";

const Experience: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return <Page header={t("experience")}>Experience</Page>;
};

export default Experience;
