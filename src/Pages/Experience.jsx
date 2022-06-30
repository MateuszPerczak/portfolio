import { memo } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header/Header";
import PageContent from "../Components/Page/PageContent";
import Panel from "../Components/Panel/Panel";
import PanelContent from "../Components/Panel/PanelContent";
import PanelHeader from "../Components/Panel/PanelHeader";
import PanelSkill from "../Components/Panel/PanelSkill";
import experience from "../Data/experience.json";

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
        {experience.map((exp) => {
          return (
            <Panel key={exp.id}>
              <PanelHeader header={t(exp.id)} icon="&#xF427;" />
              <PanelContent>
                <PanelSkill
                  header={t(exp.description)}
                  description={exp.date}
                />
              </PanelContent>
            </Panel>
          );
        })}
      </PageContent>
    </animated.div>
  );
};

export default memo(Experience);
