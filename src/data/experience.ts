type Experience = {
  id: number;
  header: string;
  description: string;
  date: string;
};

const experience: Experience[] = [
  {
    id: 1,
    header: "STAŻ W FIRMIE COIG S.A.",
    description: "Full Stack Developer",
    date: "07.2022 r.",
  },
  {
    id: 2,
    header: "PRACA W FIRMIE MAGOREX SP. Z O.O. SP. K.",
    description: "Pracownik produkcyjny",
    date: "11.2021 r. - 02.2022 r.",
  },
  {
    id: 3,
    header: "STAŻ W FIRMIE DIGGER IZABELA GRĘBOWIEC",
    description: "Pracownik biurowy",
    date: "05.2021 r. - 10.2021 r.",
  },
  {
    id: 4,
    header: "PRAKTYKA W URZĘDZIE GMINY ŚWIERKLANY",
    description: "Informatyk",
    date: "05.2020 r. - 05.2020 r.",
  },
];

export default experience;
