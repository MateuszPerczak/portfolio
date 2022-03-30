import { useTranslation } from "next-i18next";
import Page from "../components/page/page";
import Card from "../components/card/card";
import CardText from "../components/card/cardText";

const Skills = () => {
  // translation
  const { t } = useTranslation("skills");

  return (
    <Page header={t("skills")} id="skills">
      <Card header={t("programmingLanguages")} icon="&#xE943;">
        <CardText description="JavaScript, Python, C#" />
      </Card>
      <Card header={t("descriptiveLanguages")} icon="&#xE943;">
        <CardText description="HTML5, CSS, SCSS, Markdown" />
      </Card>
      <Card header={t("versionControl")} icon="&#xF22C;">
        <CardText description="Git, Github, Github Actions" />
      </Card>
      <Card header={t("runtimes&implementations")} icon="&#xE621;">
        <CardText description="NodeJS, PyPy" />
      </Card>
      <Card header={t("libraries&frameworks")} icon="&#xEC7A;">
        <CardText
          header="JavaScript"
          description="React, Next, Astro, Webpack, Emotion, i18next, Lodash"
        />
        <CardText
          header="Python"
          description="Tkinter, Pygame, os, json, logging, traceback, PIL, io, random, requests, threading, mutagen, win10toast, psutil, zipfile, hashlib, difflib, ctypes, darkdetect, wmi, GPUtil, platform, dataclasses, cryptography, pyperclip, webbrowser, win32api"
        />
        <CardText header="C#" description="microsoft-ui-xaml" />
      </Card>
      <Card header={t("languages")} icon="&#xF2B7;">
        <CardText description={`${t("polish")} - Native`} />
        <CardText description={`${t("english")} - B2+`} />
      </Card>
    </Page>
  );
};

export default Skills;

//&#xEA79;
