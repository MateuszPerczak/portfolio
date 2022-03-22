import Page from "../components/page/page";
import PageVariableView from "../components/page/pageVariableView";
import ProjectCard from "../components/project/projectCard";
import Link from "../components/link/link";

const Projects = () => {
  return (
    <Page header="Projekty" id="projects">
      <PageVariableView>
        <ProjectCard
          title="Portfolio"
          description="Strona zawierająca informacje o mnie, moich projektach itp. (Włąśnie ja przeglądasz)"
          lib="Next, React, Emotion"
          lang="Html, Scss, Javascript"
          href="#"
        />
        <ProjectCard
          title="PySpec"
          description="Aplikacja dla systemów Microsoft Windows, która identyfikuje procesor, pamięć RAM, chipset płyty głównej (oraz inne właściwości sprzętu komputerowego) zainstalowane w komputerze."
          lib="Tkinter, WMI, GPUtil, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/PySpec"
        />
        <ProjectCard
          title="Cypher"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób zaszyfrować / odszyfrować wybrane pliki."
          lib="Tkinter, Cryptography, Base64, ZipFile, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/Cypher"
        />
        <ProjectCard
          title="PyHash"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób wygenerować hash (sha1, sha256, md5) dla wybranych plików."
          lib="Tkinter, Hashlib, Pyperclip, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/PyHash"
        />
        <ProjectCard
          title="Sounder5"
          description="Zaawansowany odtwarzacz muzyczny dla systemów Microsoft Windows, umożliwiający odtwarzanie utworów dzwiękowych w popularnych formatach (mp3, ogg, wav, flac)."
          lib="Tkinter, Pygame, Win10toast, Win32file, Winreg, Ctypes, Difflib, Shutil, Hashlib, Psutil, DarkDetect, ..."
          lang="Python"
          href="https://github.com/losek1/Sounder5"
        />
        <ProjectCard
          title="SamPy"
          description="Aplikacja dla systemów Microsoft Windows, pozwalająca w łatwy sposób znaleść zduplikowane pliki w wybranych folderach."
          lib="Tkinter, Hashlib, Webbrowser, ..."
          lang="Python"
          href="https://github.com/losek1/SamPy"
        />
        <ProjectCard
          title="WASM-Compressor"
          description="Przestarzała aplikacja dla systemów Microsoft Windows, pozwalająca skompresować pliki webassembly (wasm)."
          lib="Tkinter, brotli"
          lang="Python"
          href="https://github.com/losek1/WASM-Compressor"
        />
      </PageVariableView>
      <Link
        header="Github"
        description="Zobacz więcej projektów na moim githubie!"
        href="https://github.com/losek1?tab=repositories"
      />
    </Page>
  );
};

export default Projects;
