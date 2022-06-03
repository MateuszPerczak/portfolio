import { memo } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header/Header";
import PageWrap from "../Components/Page/PageWrap";
import PanelProject from "../Components/Panel/PanelProject";
import projects from "../Data/projects";

const Projects = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 400 },
  });
  const { t } = useTranslation();
  return (
    <animated.div style={transition}>
      <Header>{t("projects")}</Header>
      <PageWrap>
        {projects.map((project) => {
          return <PanelProject key={project.id} {...project} />;
        })}
      </PageWrap>
    </animated.div>
  );
};

export default memo(Projects);
