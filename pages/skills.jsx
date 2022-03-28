import Page from "../components/page/page";
import Card from "../components/card/card";
import CardText from "../components/card/cardText";

const Skills = () => {
  return (
    <Page header="Umiejętności" id="skills">
      <Card header="Języki programowania" icon="&#xE943;">
        <CardText description="JavaScript, Python, C#" />
      </Card>
      <Card header="Języki opisowe" icon="&#xE943;">
        <CardText description="HTML5, CSS, SCSS, Markdown" />
      </Card>
      <Card header="Kontrola wersji" icon="&#xF22C;">
        <CardText description="Git, Github, Github Actions" />
      </Card>
      <Card header="Środowiska wykonywania i implementacje" icon="&#xE621;">
        <CardText description="NodeJS, PyPy" />
      </Card>
      <Card header="Frameworki, biblioteki, itp." icon="&#xEC7A;">
        <CardText
          header="JavaScript"
          description="React, Next, Astro, Webpack, Emotion, i18next"
        />
        <CardText
          header="Python"
          description="Tkinter, Pygame, os, json, logging, traceback, PIL, io, random, requests, threading, mutagen, win10toast, psutil, zipfile, hashlib, difflib, ctypes, darkdetect, wmi, GPUtil, platform, dataclasses, cryptography, pyperclip, webbrowser, win32api"
        />
        <CardText header="C#" description="microsoft-ui-xaml" />
      </Card>
      <Card header="Języki" icon="&#xF2B7;">
        <CardText description="Polski - Native" />
        <CardText description="Angielski - B2+" />
      </Card>
    </Page>
  );
};

export default Skills;

//&#xEA79;
