import { useTranslation } from "next-i18next";
import Page from "../components/page/page";
import PageVariableView from "../components/page/pageVariableView";
import Link from "../components/link/link";
import LinkHeader from "../components/link/linkHeader";
import LinkSection from "../components/link/linkSection";
import LinkProject from "../components/link/linkProject";

const Projects = () => {
  // translation
  const { t } = useTranslation("projects");

  return (
    <Page header={t("projects")} id="projects">
      <PageVariableView>
        <LinkProject
          href="https://github.com/MateuszPerczak/mateuszperczak.github.io"
          target="_blank"
          header="Portfolio"
          description={t("portfolio")}
          libs="Next, React, Emotion, Markdown, Lodash, i18next"
          lang="Html, Scss, Javascript"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/PySpec"
          target="_blank"
          header="PySpec"
          description={t("pySpec")}
          libs="Tkinter, WMI, GPUtil, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/Cypher"
          target="_blank"
          header="Cypher"
          description={t("cypher")}
          libs="Tkinter, Cryptography, Base64, ZipFile, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/PyHash"
          target="_blank"
          header="PyHash"
          description={t("pyHash")}
          libs="Tkinter, Hashlib, Pyperclip, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/Sounder5"
          target="_blank"
          header="Sounder5"
          description={t("sounder5")}
          libs="Tkinter, Pygame, Win10toast, Win32file, Winreg, Ctypes, Difflib, Shutil, Hashlib, Psutil, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/SamPy"
          target="_blank"
          header="SamPy"
          description={t("samPy")}
          libs="Tkinter, Hashlib, Webbrowser, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/WASM-Compressor"
          target="_blank"
          header="WASM-Compressor"
          description={t("wasm")}
          libs="Tkinter, brotli, ..."
          lang="Python"
        />
      </PageVariableView>
      <Link href="https://github.com/MateuszPerczak?tab=repositories">
        <LinkHeader header="Github" icon="&#xE167;" />
        <LinkSection description={t("githubLink")} />
      </Link>
    </Page>
  );
};

export default Projects;
