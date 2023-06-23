import { useState } from "react";
import Hero from "./Hero";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ImageComponent from "./ImageComponent";

import bgImage from "../assets/images/kids.jpg";
import luke from "../assets/images/luke-18-16.png";
import proverbs from "../assets/images/proverbs-22-06.png";
import kids from "../utils/kids";
import "../styles/kids.scss";

const Kids = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="kids">
      <Hero bgImage={bgImage} text="Grupa Duminicală" />
      <div className="kids-container">
        <h1>Cine suntem?</h1>
        {isOpened && (
          <Lightbox images={kids} onClose={() => setIsOpened(false)} />
        )}
        <ImageComponent
          src={kids[0].url}
          hash={"LPIO8}yD?a?b~VIAM{W;%hnjM{Rj"}
          onClick={() => setIsOpened(true)}
        />
        <p>
          Școala duminicală este un loc în care copii învăță despre Dumnezeu. Ne
          dorim să îi ajutăm în a descoperi dragostea față de Dumnezeu, iubirea
          față de semeni și împlinirea Cuvântului. Învățătorii de la grupe sunt
          oameni dedicați, plini de entuziasm și dragoste pentru copii.
        </p>
        <p>
          Dacă ești un părinte și dorești ce este mai bine pentru copilul tău
          atunci când vine vorba de a-L îndruma pe calea cea dreaptă nu ezita să
          îl aduci la una din grupele bisericii Maranata.
        </p>
      </div>
      <div className="verses-images">
        <img src={luke} alt="Luca 18:16" />
        <img src={proverbs} alt="Proverbe 22:6" />
      </div>
    </div>
  );
};

export default Kids;
