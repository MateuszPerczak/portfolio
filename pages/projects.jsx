import Page from "../components/page/page";
import PageVariableView from "../components/page/pageVariableView";
import Card from "../components/project/card";
import Link from "../components/link/link";
import LinkHeader from "../components/link/linkHeader";
import LinkSection from "../components/link/linkSection";

const Projects = () => {
  return (
    <Page header="Projekty" id="projects">
      <PageVariableView>
        <Card
          title="Portfolio"
          description="Strona zawierająca informacje o mnie, moich projektach itp. (Włąśnie ja przeglądasz)"
          lib="Next, React, Emotion"
          lang="Html, Scss, Javascript"
          href="https://github.com/MateuszPerczak/portfolio"
        />
        <Card
          title="PySpec"
          description="Aplikacja dla systemów Microsoft Windows, która identyfikuje procesor, pamięć RAM, chipset płyty głównej (oraz inne właściwości sprzętu komputerowego) zainstalowane w komputerze."
          lib="Tkinter, WMI, GPUtil, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/PySpec"
        />
        <Card
          title="Cypher"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób zaszyfrować / odszyfrować wybrane pliki."
          lib="Tkinter, Cryptography, Base64, ZipFile, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/Cypher"
        />
        <Card
          title="PyHash"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób wygenerować hash (sha1, sha256, md5) dla wybranych plików."
          lib="Tkinter, Hashlib, Pyperclip, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/PyHash"
        />
        <Card
          title="Sounder5"
          description="Zaawansowany odtwarzacz muzyczny dla systemów Microsoft Windows, umożliwiający odtwarzanie utworów dzwiękowych w popularnych formatach (mp3, ogg, wav, flac)."
          lib="Tkinter, Pygame, Win10toast, Win32file, Winreg, Ctypes, Difflib, Shutil, Hashlib, Psutil, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/Sounder5"
        />
        <Card
          title="SamPy"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób znaleść zduplikowane pliki w wybranych folderach."
          lib="Tkinter, Hashlib, Webbrowser, ..."
          lang="Python"
          href="https://github.com/losek1/SamPy"
        />
        <Card
          title="WASM-Compressor"
          description="Przestarzała aplikacja dla systemów Microsoft Windows, pozwalająca skompresować pliki webassembly (wasm)."
          lib="Tkinter, brotli"
          lang="Python"
          href="https://github.com/losek1/WASM-Compressor"
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
