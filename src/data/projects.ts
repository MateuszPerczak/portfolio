type Project = {
  id: number;
  header: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    header: "HARDWAREINFO",
    description:
      "Aplikacja identyfikująca procesor, pamięć RAM, chipset płyty głównej (oraz inne właściwości sprzętu komputerowego) zainstalowane w komputerze.",
  },
  {
    id: 2,
    header: "WEATHER",
    description:
      "Aplikacja web'owa pozwalająca na sprawdzenie pogody w wybranym regionie Polski.",
  },
  {
    id: 3,
    header: "LUIX",
    description:
      "Wirtualny pulpit odwzorowywujący system operacyjny. Posiada pasek zadań, menedżer okien i kilka podstawowych aplikacji wraz z możliwością ich poszerzenia.",
  },
  {
    id: 4,
    header: "PYSCRIPTREACT",
    description:
      "Biblioteka łącząca React'a z PyScript'em. Pozwala uruchamiać skrypty pythona w przeglądarce.",
  },
  {
    id: 5,
    header: "TICTACTOE",
    description: "Gra kółko i krzyżyk mojega autorstwa wykorzystująca bibliotekę React.",
  },
  {
    id: 5,
    header: "PYHASH",
    description:
      "Aplikacja pozwalająca w łatwy sposób wygenerować hash (sha1, sha256, md5) dla wybranych plików.",
  },
];

export default projects;
