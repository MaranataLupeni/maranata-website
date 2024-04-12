import baptism2023 from "./baptism2023";
import anniversary2023 from "./anniversay2023";
import newYear2024 from "./new-year-2024";

const events = [
  {
    id: 1,
    name: "Botez Nou Testamental",
    date: "30.07.2023",
    description:
      "Cu autorul Domnului 15 suflete au incheiat un legamant cu Dumnezeu.",
    pictures: baptism2023,
  },
  {
    id: 2,
    name: "Aniversarea de 30 de ani",
    date: "05.08.2023",
    description: "Am sarbatorit 30 de ani de la infiintarea Bisericii.",
    pictures: anniversary2023,
  },
  {
    id: 3,
    name: "Revelion 2024 Tineret",
    date: "31.12.2023",
    description: "Am sarbatorit impreuna trecerea intre ani.",
    pictures: newYear2024,
  },
];

export default events;
