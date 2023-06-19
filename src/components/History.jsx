import Hero from "./Hero";

import bgImage from "../assets/images/history.jpg";
import "../styles/history.scss";

const History = () => {
  return (
    <div className="history">
      <Hero bgImage={bgImage} text="Istoric" />
      <div className="history-container">
        <h2>Scurt istoric al Bisericii Maranata Lupeni</h2>
        <iframe
          src="https://drive.google.com/file/d/1-74erLrHJrzkJ2oVvARLetimAouwSdHn/preview"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default History;
