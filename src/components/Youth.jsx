import { useState } from "react";
import Hero from "./Hero";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import ImageComponent from "./ImageComponent";

import youth from "../utils/youth";

import bgImage from "../assets/images/youth.jpg";
import "../styles/youth.scss";

const Youth = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="youth">
      <Hero bgImage={bgImage} text="Tineret" />
      <div className="youth-container">
        <div className="quote">
          <hr />
          <h1>
            "Poporul Tău este plin de înflăcărare când Îți aduni oștirea; cu
            podoabe sfinte, ca din sânul zorilor, vine{" "}
            <u style={{ color: "white" }}>tineretul</u> Tău la Tine, ca roua."
          </h1>
          <h4>Psalmul 110:3</h4>
          <hr />
        </div>
        {isOpened && (
          <Lightbox images={youth} onClose={() => setIsOpened(false)} />
        )}
        <ImageComponent
          src={youth[0].url}
          hash={"LpHU:?kCV@kC~poeayayxuV@WUay"}
          onClick={() => setIsOpened(true)}
        />
        <hr />
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D180400007829368%26set%3Da.180399977829371&show_text=true&width=500"
          width="100%"
          height="534"
          style={{ border: "none", overflow: "hidden", marginBlock: "2rem" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
          id="frame"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Youth;
