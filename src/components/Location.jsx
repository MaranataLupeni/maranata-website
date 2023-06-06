import { useState } from "react";
import { useMemo } from "react";
import Hero from "./Hero";
import ImageComponent from "./ImageComponent";

import bgImage from "../assets/images/location.jpeg";
import churchOverview from "../assets/images/church-overview.jpg";
import "../styles/location.scss";
import hasDST from "../utils/hasDST";

const Location = () => {
  const dst = hasDST();

  return (
    <div>
      <Hero bgImage={bgImage} text={"Locație"} />
      <div className="location-container">
        <h1>Lupeni, HD</h1>
        <ImageComponent
          src={churchOverview}
          hash={"LGDu_T$j569tY8a}skxZBrI:$$r?"}
        />

        <h2>Slujbe</h2>
        <p>
          În biserica noastră slujbele au loc de două ori pe săptămâna: Duminică
          (9:00 | {!dst ? "17:00" : "18:00"}) și Joi ({!dst ? "17:00" : "18:00"}
          ). De asemenea serile de rugăciune au loc în fiecare Marți și Vineri,
          începând de la ora 18:00.
        </p>
        <h2>Locație și direcție</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2803.975823410617!2d23.2003901!3d45.3493003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474de7f5aa3fb301%3A0x3282b13d09e46019!2sBiserica%20Maranata!5e0!3m2!1sro!2sro!4v1681146694540!5m2!1sro!2sro"
          style={{
            border: "0",
            boxShadow: "none",
            width: "100%",
            aspectRatio: "16 / 9",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
