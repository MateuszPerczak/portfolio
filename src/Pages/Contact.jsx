import { memo } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header/Header";
import PageContent from "../Components/Page/PageContent";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/Panel/PanelHeader";
import PanelContent from "../Components/Panel/PanelContent";
import PanelLink from "../Components/Panel/PanelLink";

const Contact = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const { t } = useTranslation("contact");

  return (
    <animated.div style={transition}>
      <Header>{t("title")}</Header>
      <PageContent>
        <Panel>
          <PanelHeader header="Email" icon="&#xE168;" />
          <PanelContent>
            <PanelLink href="mailto: mateusz.perczak.mp@gmail.com">
              mateusz.perczak.mp@gmail.com
            </PanelLink>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("other")} icon="&#xE167;" />
          <PanelContent>
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

export default memo(Contact);
