import Page from "../components/page/page";
import Card from "../components/card/card";
import CardLang from "../components/card/cardLang";

const Skills = () => {
  return (
    <Page header="Umiejętności" id="skills">
      <Card header="Języki programowania" icon="&#xE943;">
        <CardLang lang="JavaScript, Python, C#" />
      </Card>
      <Card header="Języki opisowe" icon="&#xE943;">
        <CardLang lang="HTML5, CSS, SCSS, Markdown" />
      </Card>
      <Card header="Kontrola wersji" icon="&#xF22C;">
        <CardLang lang="Git, Github, Github Actions" />
      </Card>
      <Card header="Środowiska wykonywania i implementacje" icon="&#xE621;">
        <CardLang lang="NodeJS, PyPy" />
      </Card>
      <Card header="Frameworki, biblioteki, itp." icon="&#xEC7A;">
        <CardLang
          header="JavaScript"
          lang="React, Next, Astro, Webpack, Emotion, i18next"
        />
        <CardLang
          header="Python"
          lang="Tkinter, Pygame, os, json, logging, traceback, PIL, io, random, requests, threading, mutagen, win10toast, psutil, zipfile, hashlib, difflib, ctypes, darkdetect, wmi, GPUtil, platform, dataclasses, cryptography, pyperclip, webbrowser, win32api"
        />
        <CardLang header="C#" lang="microsoft-ui-xaml" />
      </Card>
      <Card header="Języki" icon="&#xF2B7;">
        <CardLang lang="Polski - Native" level="Native" />
        <CardLang lang="Angielski - C1" level="C1" />
      </Card>
    </Page>
  );
};

export default Skills;

//&#xEA79;
