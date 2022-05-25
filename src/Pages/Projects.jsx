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
    config: { tension: 400 },
  });

  const { t } = useTranslation("projects");

  return (
    <animated.div style={transition}>
      <Header>{t("title")}</Header>
      <PageWrap>
        <PanelProject
          header="Portfolio"
          description={t("portfolio")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/mateuszperczak.github.io",
              name: "Github",
            },
          ]}
          lang="React, Emotion, react-spring, react-i18next, ..."
        />
        <PanelProject
          header="TicTacToe"
          description={t("ticTacToe")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/tictactoe",
              name: "Github",
            },
            {
              href: "https://mateuszperczak.github.io/tictactoe/",
              name: "Demo",
            },
          ]}
          lang="React, Emotion, Lodash, react-router-dom, ..."
        />
        <PanelProject
          header="PyScript-React"
          description={t("pyScriptReact")}
          links={[
            {
              href: "https://github.com/Py4Js/PyScript-React",
              name: "Github",
            },
          ]}
          lang="React, Python, Folium, Lodash, Storybook, Jest, ..."
        />

        <PanelProject
          header="Cypher"
          description={t("cypher")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/Cypher",
              name: "Github",
            },
          ]}
          lang="Python, Tkinter, Cryptography, Base64, ZipFile, DarkDetect, ..."
        />

        <PanelProject
          header="PySpec"
          description={t("pySpec")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/PySpec",
              name: "Github",
            },
          ]}
          lang="Python, Tkinter, WMI, GPUtil, DarkDetect, ..."
        />

        <PanelProject
          header="PyHash"
          description={t("pyHash")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/PyHash",
              name: "Github",
            },
          ]}
          lang="Python, Tkinter, Hashlib, Pyperclip, DarkDetect, ..."
        />

        <PanelProject
          header="TkDeb"
          description={t("tkDeb")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/TkDeb",
              name: "Github",
            },
          ]}
          lang="Python, Tkinter, os, ..."
        />

        <PanelProject
          header="Sounder5"
          description={t("sounder")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/Sounder5",
              name: "Github",
            },
          ]}
          lang="Python, Tkinter, Pygame, Win10toast, DarkDetect, ..."
        />

        <PanelProject
          header="SamPy"
          description={t("samPy")}
          links={[
            {
              href: "https://github.com/MateuszPerczak/SamPy",
              name: "Github",
            },
          ]}
          lang="Python, Tkinter, Hashlib, Webbrowser, ..."
        />
      </PageWrap>
    </animated.div>
  );
};

export default memo(Projects);
