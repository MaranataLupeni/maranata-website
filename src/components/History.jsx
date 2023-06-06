import Hero from "./Hero";

import bgImage from "../assets/images/history.jpg";

const History = () => {
  return (
    <div className="history">
      <Hero bgImage={bgImage} text="Istoric" />
    </div>
  );
};

export default History;
