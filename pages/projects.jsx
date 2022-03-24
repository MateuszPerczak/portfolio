import Page from "../components/page/page";
import PageVariableView from "../components/page/pageVariableView";
import Link from "../components/link/link";
import LinkHeader from "../components/link/linkHeader";
import LinkSection from "../components/link/linkSection";
import LinkProject from "../components/link/linkProject";

const Projects = () => {
  return (
    <Page header="Projekty" id="projects">
      <PageVariableView>
        <LinkProject
          href="https://github.com/MateuszPerczak/mateuszperczak.github.io"
          target="_blank"
          header="Portfolio"
          description="Strona zawierająca informacje o mnie, moich projektach itp. (Włąśnie ja przeglądasz)"
          libs="Next, React, Emotion"
          lang="Html, Scss, Javascript"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/PySpec"
          target="_blank"
          header="PySpec"
          description="Aplikacja dla systemów Microsoft Windows, która identyfikuje procesor, pamięć RAM, chipset płyty głównej (oraz inne właściwości sprzętu komputerowego) zainstalowane w komputerze."
          libs="Tkinter, WMI, GPUtil, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/Cypher"
          target="_blank"
          header="Cypher"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób zaszyfrować / odszyfrować wybrane pliki."
          libs="Tkinter, Cryptography, Base64, ZipFile, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/PyHash"
          target="_blank"
          header="PyHash"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób wygenerować hash (sha1, sha256, md5) dla wybranych plików."
          libs="Tkinter, Hashlib, Pyperclip, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/Sounder5"
          target="_blank"
          header="Sounder5"
          description="Zaawansowany odtwarzacz muzyczny dla systemów Microsoft Windows, umożliwiający odtwarzanie utworów dzwiękowych w popularnych formatach (mp3, ogg, wav, flac)."
          libs="Tkinter, Pygame, Win10toast, Win32file, Winreg, Ctypes, Difflib, Shutil, Hashlib, Psutil, DarkDetect, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/SamPy"
          target="_blank"
          header="PyHash"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób znaleść zduplikowane pliki w wybranych folderach."
          libs="Tkinter, Hashlib, Webbrowser, ..."
          lang="Python"
        />
        <LinkProject
          href="https://github.com/MateuszPerczak/WASM-Compressor"
          target="_blank"
          header="WASM-Compressor"
          description="Przestarzała aplikacja dla systemów Microsoft Windows, pozwalająca skompresować pliki webassembly (wasm)."
          libs="Tkinter, brotli, ..."
          lang="Python"
        />
      </PageVariableView>
      <Link href="https://github.com/MateuszPerczak?tab=repositories">
        <LinkHeader header="Github" icon="&#xE167;" />
        <LinkSection description="Zobacz inne projekty na moim githubie!" />
      </Link>
    </Page>
  );
};

export default Projects;
