import { FC, memo } from "react";
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
      {experience.map(({ key, date }, index) => {
        return (
          <Panel key={index}>
            <PanelHeader header={t(`${key}.header`)} icon="&#xF427;" />
            <PanelContent>
              <PanelExp description={t(`${key}.description`)} date={date} />
            </PanelContent>
          </Panel>
        );
      })}
    </Page>
  );
};

export default memo(Experience);
