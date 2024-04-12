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
      <div
        className="youth-verse"
        onClick={() =>
          window.open(
            "https://www.bible.com/ro/bible/191/PSA.110.3.VDC",
            "_blank"
          )
        }
      ></div>
      <div className="youth-container">
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
          title="facebook"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D180400007829368%26set%3Da.180399977829371&show_text=true&width=500"
          width="100%"
          height="534"
          style={{ border: "none", overflow: "hidden", marginBlock: "2rem" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          id="frame"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Youth;
