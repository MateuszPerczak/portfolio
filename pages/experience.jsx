import { useTranslation } from "next-i18next";
import Page from "../components/page/page";
import Card from "../components/card/card";
import CardWork from "../components/card/cardWork";

const Experience = () => {
  // translation
  const { t } = useTranslation("experience");

  return (
    <Page header={t("experience")} id="experience">
      <Card header={t("itSpecialist")} icon="&#xF427;">
        <CardWork
          description={t("practice")}
          from="05.2020 r."
          to="05.2020 r."
        />
      </Card>
      <Card header={t("officeWorker")} icon="&#xF427;">
        <CardWork
          description={t("probation")}
          from="05.2021 r."
          to="10.2021 r."
        />
      </Card>
      <Card header={t("productionWorker")} icon="&#xF427;">
        <CardWork
          description="Magorex sp. z o.o. sp. k."
          from="11.2021 r."
          to="02.2022 r."
        />
      </Card>
    </Page>
  );
};

export default Experience;
