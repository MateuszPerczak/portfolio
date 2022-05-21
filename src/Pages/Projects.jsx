import { memo } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header/Header";
import PageWrap from "../Components/Page/PageWrap";
import PanelProject from "../Components/Panel/PanelProject";

const Projects = () => {
  const transition = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const { t } = useTranslation("projects");

  return (
    <animated.div style={transition}>
      <Header>{t("title")}</Header>
      <PageWrap>
        <PanelProject
          header="Portfolio"
          href="https://github.com/MateuszPerczak/mateuszperczak.github.io"
          description={t("portfolio")}
          lang="React, Emotion, react-spring, react-router-dom, react-reduce-motion, react-i18next, use-system-theme, react-circle-flags"
        />
        <PanelProject
          header="TicTacToe"
          href="https://github.com/MateuszPerczak/tictactoe"
          description={t("ticTacToe")}
          lang="React, Emotion, Lodash, react-router-dom"
          website="https://mateuszperczak.github.io/tictactoe/"
        />
        <PanelProject
          header="PyScript-React"
          href="https://github.com/Py4Js/PyScript-React"
          description={t("pyScriptReact")}
          lang="React, Python, Folium, Lodash, Storybook, Jest"
        />

        <PanelProject
          header="Cypher"
          href="https://github.com/MateuszPerczak/Cypher"
          description={t("cypher")}
          lang="Python, Tkinter, Cryptography, Base64, ZipFile, DarkDetect, ..."
        />

        <PanelProject
          header="PySpec"
          href="https://github.com/MateuszPerczak/PySpec"
          description={t("pySpec")}
          lang="Python, Tkinter, WMI, GPUtil, DarkDetect, ..."
        />

        <PanelProject
          header="PyHash"
          href="https://github.com/MateuszPerczak/PyHash"
          description={t("pyHash")}
          lang="Python, Tkinter, Hashlib, Pyperclip, DarkDetect, ..."
        />

        <PanelProject
          header="TkDeb"
          href="https://github.com/MateuszPerczak/TkDeb"
          description={t("tkDeb")}
          lang="Python, Tkinter, os, ..."
        />

        <PanelProject
          header="Sounder5"
          href="https://github.com/MateuszPerczak/Sounder5"
          description={t("sounder")}
          lang="Python, Tkinter, Pygame, Win10toast, Win32file, Winreg, Ctypes, Difflib, Shutil, Hashlib, Psutil, DarkDetect, ..."
        />

        <PanelProject
          header="SamPy"
          href="https://github.com/MateuszPerczak/SamPy"
          description={t("samPy")}
          lang="Python, Tkinter, Hashlib, Webbrowser, ..."
        />
        {/* <PanelProject header="" href="" description="" lang="" /> */}
      </PageWrap>
    </animated.div>
  );
};

export default memo(Projects);
