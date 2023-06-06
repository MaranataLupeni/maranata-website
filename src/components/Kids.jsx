import { useState } from "react";
import Hero from "./Hero";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ImageComponent from "./ImageComponent";

import bgImage from "../assets/images/kids.jpg";
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
      <div className="verses">
        <div className="verse">
          <h1 style={{ fontSize: "1.75rem" }}>
            Învață pe <span style={{ color: "white" }}>copil</span> calea pe
            care trebuie s-o urmeze, și când va îmbătrâni,{" "}
            <span style={{ color: "white" }}>nu se va abate</span> de la ea.
          </h1>
          <h4>
            <em>Proverbe 22:6</em>
          </h4>
        </div>
        <div className="verse">
          <h1 style={{ fontSize: "1.75rem" }}>
            Isus a chemat la Sine pe{" "}
            <span style={{ color: "white" }}>copilași</span> și a zis: „Lăsați
            copilașii să vină la Mine și nu-i opriți, căci{" "}
            <span style={{ color: "white" }}>
              Împărăția lui Dumnezeu este a unora ca ei
            </span>
            .
          </h1>
          <h4>
            <em>Luca 18:16</em>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Kids;
