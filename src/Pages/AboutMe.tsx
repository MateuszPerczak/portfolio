import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";

const AboutMe: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return <Page header={t("aboutMe")}>AboutMe</Page>;
};

export default AboutMe;
