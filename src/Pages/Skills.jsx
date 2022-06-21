import { memo } from "react";
import { useSpring, animated } from "react-spring";
import Header from "../Components/Header/Header";
import PageContent from "../Components/Page/PageContent";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/Panel/PanelHeader";
import PanelContent from "../Components/Panel/PanelContent";
import Text from "../Components/Text/Text";
import PanelSkill from "../Components/Panel/PanelSkill";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 400 },
  });

  const { t } = useTranslation("skills");

  return (
    <animated.div style={transition}>
      <Header>{t("title")}</Header>
      <PageContent>
        <Panel>
          <PanelHeader header={t("programingLanguages")} icon="&#xE943;" />
          <PanelContent flexDirection="column">
            <PanelSkill header="Regular:" description="JavaScript, Python" />
            <PanelSkill header="Junior:" description="TypeScript, C#" />
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("descriptiveLanguages")} icon="&#xE943;" />
          <PanelContent flexDirection="row">
            <Text fontSize={0.8}>HTML, CSS, SCSS, Markdown</Text>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("versionControl")} icon="&#xF22C;" />
          <PanelContent flexDirection="row">
            <Text fontSize={0.8}>Git, Github, Github actions</Text>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader
            header={t("runtimesAndImplementations")}
            icon="&#xE621;"
          />
          <PanelContent flexDirection="row">
            <Text fontSize={0.8}>NodeJS, PyPy</Text>
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("frameworksAndLibraries")} icon="&#xEC7A;" />
          <PanelContent flexDirection="column">
            <PanelSkill
              // eslint-disable-next-line no-script-url
              header="JavaScript, TypeScript:"
              description="React, Next, Astro, Emotion, Webpack, Lodash, react-spring,
              react-reduce-motion, react-router-dom, react-i18next,
              use-system-theme, react-draggable, use-local-storage"
            />
            <PanelSkill
              header="Python:"
              description="Pygame, darkdetect, Tkinter, GPUtil, Mutagen, win10toast, PIL,
              wmi, os, pillow, threading, webbrowser, win32api, cryptography,
              pyperclip, difflib, requests, zipfile, psutil, random, io,
              hashlib, ctypes, dataclasses, autocorrect"
            />
            <PanelSkill header="C#:" description="WinUi" />
          </PanelContent>
        </Panel>
        <Panel>
          <PanelHeader header={t("languages")} icon="&#xF2B7;" />
          <PanelContent>
            <Text fontSize={0.8}>Polish - Native</Text>
            <Text fontSize={0.8}>English - B2+</Text>
          </PanelContent>
        </Panel>
      </PageContent>
    </animated.div>
  );
};

export default memo(Skills);
