import { memo } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header/Header";
import PageContent from "../Components/Page/PageContent";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/Panel/PanelHeader";
import PanelContent from "../Components/Panel/PanelContent";
import PanelImage from "../Components/Panel/PanelImage";
import PanelLink from "../Components/Panel/PanelLink";

const AboutMe = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 400 },
  });

  const { t } = useTranslation("about");
  return (
    <animated.div style={transition}>
      <Header>{t("title")}</Header>
      <PageContent>
        <Panel>
          <PanelHeader header={t("aboutMe")} icon="&#xE006;" />
          <PanelContent flexDirection="row">
            <PanelImage
              src="https://avatars.githubusercontent.com/u/40388335?v=4"
              size={150}
              alt="Mateusz Perczak"
              description={t("description")}
            />
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("workingOn")} icon="&#xE15E;" />
          <PanelContent flexDirection="row" flexWrap="wrap">
            <PanelLink href="https://github.com/Py4Js/PyScript-React">
              PyScript-React
            </PanelLink>
            <PanelLink href="https://github.com/MateuszPerczak/Luix">
              Luix
            </PanelLink>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("nowLearning")} icon="&#xE1D3;" />
          <PanelContent flexDirection="row" flexWrap="wrap">
            <span>TypeScript</span>
          </PanelContent>
        </Panel>

        <Panel>
          <PanelHeader header={t("usefulLinks")} icon="&#xE167;" />
          <PanelContent flexDirection="row" flexWrap="wrap">
            <PanelLink href="https://www.linkedin.com/in/mateuszperczak/">
              LinkedIn
            </PanelLink>
            <PanelLink href="https://github.com/MateuszPerczak">
              Github
            </PanelLink>
          </PanelContent>
        </Panel>
      </PageContent>
    </animated.div>
  );
};

export default memo(AboutMe);
