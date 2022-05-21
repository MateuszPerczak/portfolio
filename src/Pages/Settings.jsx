import { memo } from "react";
import { useSpring, animated } from "react-spring";
import PageContent from "../Components/Page/PageContent";
import Header from "../Components/Header/Header";
import Panel from "../Components/Panel/Panel";
import Switch from "../Components/Switch/Switch";
import ComboBox from "../Components/Combobox/ComboBox";
import PanelHeader from "../Components/Panel/PanelHeader";
import PanelContent from "../Components/Panel/PanelContent";
import PanelSetting from "../Components/Panel/PanelSetting";
import PanelLink from "../Components/Panel/PanelLink";
import { useTranslation } from "react-i18next";

const Settings = ({ useDarkMode, setDarkMode }) => {
  const languages = [
    { name: "Polski", language: "pl", flag: "pl" },
    { name: "English", language: "en", flag: "us" },
  ];

  const { t, i18n } = useTranslation("settings");

  const changeLanguages = (lang) => {
    i18n.changeLanguage(lang);
  };

  const transition = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <animated.div style={transition}>
      <Header>{t("title")}</Header>
      <PageContent>
        <Panel>
          <PanelHeader header={t("appearance")} icon="&#xE2B1;" />
          <PanelContent>
            <PanelSetting>
              <span>{t("themeDark")}</span>
              <Switch value={useDarkMode} onClick={setDarkMode} />
            </PanelSetting>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("language")} icon="&#xF2B7;" />
          <PanelContent>
            <PanelSetting>
              <span>{t("selectLanguage")}</span>
              <ComboBox
                itemsSource={languages}
                placeholderText={t("selectedLanguage")}
                onSelectionChange={changeLanguages}
              />
            </PanelSetting>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("thisPortfolio")} icon="&#xE167;" />
          <PanelContent>
            <PanelLink href="https://github.com/MateuszPerczak/mateuszperczak.github.io">
              {t("viewOnGithub")}
            </PanelLink>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("usedLibraies")} icon="&#xE943;" />
          <PanelContent>
            <PanelLink href="https://pl.reactjs.org/">React</PanelLink>
            <PanelLink href="https://emotion.sh/docs/introduction">
              Emotion
            </PanelLink>
            <PanelLink href="https://react-spring.io/">react-spring</PanelLink>
            <PanelLink href="https://github.com/infiniteluke/react-reduce-motion">
              react-reduce-motion
            </PanelLink>
            <PanelLink href="https://reactrouter.com/">
              react-router-dom
            </PanelLink>
            <PanelLink href="https://react.i18next.com/">
              react-i18next
            </PanelLink>
            <PanelLink href="https://github.com/xcv58/use-system-theme#readme">
              use-system-theme
            </PanelLink>
            <PanelLink href="https://github.com/tnovau/react-circle-flags#readme">
              react-circle-flags
            </PanelLink>
          </PanelContent>
        </Panel>
      </PageContent>
    </animated.div>
  );
};

export default memo(Settings);
