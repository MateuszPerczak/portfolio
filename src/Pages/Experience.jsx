import { memo } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header/Header";
import PageContent from "../Components/Page/PageContent";
import Panel from "../Components/Panel/Panel";
import PanelContent from "../Components/Panel/PanelContent";
import PanelHeader from "../Components/Panel/PanelHeader";
import PanelSkill from "../Components/Panel/PanelSkill";

const Experience = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 400 },
  });

  const { t } = useTranslation("experience");

  return (
    <animated.div style={transition}>
      <Header>{t("title")}</Header>
      <PageContent>
        <Panel>
          <PanelHeader header={t("practice")} icon="&#xF427;" />
          <PanelContent>
            <PanelSkill
              header={t("ITSpecialist")}
              description="05.2020 r. - 05.2020 r."
            />
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("internship")} icon="&#xF427;" />
          <PanelContent>
            <PanelSkill
              header={t("officeWorker")}
              description="05.2021 r. - 10.2021 r."
            />
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header="Magorex sp. z o.o. sp. k." icon="&#xF427;" />
          <PanelContent>
            <PanelSkill
              header={t("productionWorker")}
              description="11.2021 r. - 02.2022 r."
            />
          </PanelContent>
        </Panel>
      </PageContent>
    </animated.div>
  );
};

export default memo(Experience);
