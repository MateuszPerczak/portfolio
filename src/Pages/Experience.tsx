import { FC } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelExp from "../Components/PanelExp/PanelExp";
import experience from "../Data/experience.json";

const Experience: FC = (): JSX.Element => {
  const { t } = useTranslation("experience");

  return (
    <Page header={t("experience")}>
      {experience.map((exp, index) => {
        return (
          <Panel key={index}>
            <PanelHeader header={t(`${exp.key}.header`)} icon="&#xF427;" />
            <PanelContent>
              <PanelExp
                description={t(`${exp.key}.description`)}
                date={exp.date}
              />
            </PanelContent>
          </Panel>
        );
      })}
    </Page>
  );
};

export default Experience;
