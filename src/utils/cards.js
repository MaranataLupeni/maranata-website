import location from "../assets/images/location.jpeg";
import prayer from "../assets/images/prayer.jpg";
import beliefs from "../assets/images/beliefs.jpg";
import live from "../assets/images/live.jpg";
import kids from "../assets/images/kids.jpg";
import history from "../assets/images/history.jpg";
import leaders from "../assets/images/leaders.jpg";
import sermons from "../assets/images/sermons.jpg";
import youth from "../assets/images/youth.jpg";

const cards = [
  {
    id: 1,
    img: location,
    link: "/locatie",
    topText: "Locație",
    bottomText: "Am vrea să te cunoaștem în persoană",
  },
  {
    id: 2,
    img: prayer,
    link: "/",
    topText: "Rugăciune",
    bottomText: "Ne unim în rugăciune pentru cauza ta",
  },
  {
    id: 3,
    img: kids,
    link: "/grupa-duminicala",
    topText: "Grupa Duminicală",
    bottomText: "Copiii sunt bineveniți în biserica noastră",
  },
  {
    id: 4,
    img: live,
    link: "/live",
    topText: "Live",
    bottomText: "Urmărește-ne live",
  },
  {
    id: 5,
    img: youth,
    link: "/tineret",
    topText: "Tineret",
    bottomText: "Un loc potrivit pentru orice tânăr",
  },
  {
    id: 6,
    img: history,
    link: "/istoric",
    topText: "Istoric",
    bottomText: "Povestea noastră de la prima cărămidă",
  },
  {
    id: 7,
    img: leaders,
    link: "/lideri",
    topText: "Lideri",
    bottomText: "Cunoaște-i pe liderii bisericii noastre",
  },
  {
    id: 8,
    img: sermons,
    link: "/slujbe",
    topText: "Slujbe",
    bottomText: "Urmărește slujbele anterioare",
  },
  {
    id: 9,
    img: beliefs,
    link: "/credinta",
    topText: "Credință",
    bottomText: "În aceste lucruri ne încredem",
  },
];

export default cards;
