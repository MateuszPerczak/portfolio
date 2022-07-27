import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import Page from "../Components/Page/Page";
import Panel from "../Components/Panel/Panel";
import PanelHeader from "../Components/PanelHeader/PanelHeader";
import PanelContent from "../Components/PanelContent/PanelContent";
import PanelSkillWrapper from "../Components/PanelSkillWrapper/PanelSkillWrapper";
import PanelSkill from "../Components/PanelSkill/PanelSkill";

const Skills: FC = (): JSX.Element => {
  const { t } = useTranslation("skills");

  return (
    <Page header={t("skills")}>
      <Panel>
        <PanelHeader header={t("programingLanguages")} icon="&#xE943;" />
        <PanelContent>
          <PanelSkillWrapper>
            <PanelSkill
              header="Regular:"
              description="TypeScript, JavaScript, Python"
            />
            <PanelSkill header="Junior:" description="C#" />
          </PanelSkillWrapper>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader header={t("descriptiveLanguages")} icon="&#xE943;" />
        <PanelContent>
          <PanelSkillWrapper>
            <PanelSkill description="HTML, CSS, SCSS, Markdown" />
          </PanelSkillWrapper>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader header={t("versionControl")} icon="&#xF22C;" />
        <PanelContent>
          <PanelSkillWrapper>
            <PanelSkill description="Git, Github, GitLab, Github actions" />
          </PanelSkillWrapper>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader header={t("runtimesAndImplementations")} icon="&#xE621;" />
        <PanelContent>
          <PanelSkillWrapper>
            <PanelSkill description="NodeJS, PyPy" />
          </PanelSkillWrapper>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader header={t("frameworksAndLibraries")} icon="&#xEC7A;" />
        <PanelContent>
          <PanelSkillWrapper>
            <PanelSkill
              header="JavaScript, TypeScript:"
              description="React, Next, Astro, Emotion, Webpack, Lodash, framer-motion, react-querry, react-spring,
              react-reduce-motion, react-router-dom, react-i18next,
              use-system-theme, react-draggable, use-local-storage ..."
            />
            <PanelSkill
              header="Python:"
              description="Pygame, darkdetect, Tkinter, GPUtil, Mutagen, win10toast, PIL,
              wmi, os, pillow, threading, webbrowser, win32api, cryptography,
              pyperclip, difflib, requests, zipfile, psutil, random, io,
              hashlib, ctypes, dataclasses, autocorrect ..."
            />
            <PanelSkill header="C#:" description="WinUi" />
          </PanelSkillWrapper>
        </PanelContent>
      </Panel>
      <Panel>
        <PanelHeader header={t("languages")} icon="&#xF2B7;" />
        <PanelContent>
          <PanelSkillWrapper>
            <PanelSkill description="Polish - Native" />
            <PanelSkill description="English - B2" />
          </PanelSkillWrapper>
        </PanelContent>
      </Panel>
    </Page>
  );
};

export default memo(Skills);
