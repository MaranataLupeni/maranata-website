import Hero from "./Hero";

import bgImage from "../assets/images/beliefs.jpg";

import "../styles/beliefs.scss";

const Beliefs = () => {
  return (
    <div className="beliefs-container">
      <Hero bgImage={bgImage} text={"Credință"} />
      <div className="beliefs">
        <h1>Credința noastră</h1>
        <iframe
          src="https://drive.google.com/file/d/1gjic4pnOnEV7oPXl-RXN4dIJDCwuKFU4/preview"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Beliefs;
