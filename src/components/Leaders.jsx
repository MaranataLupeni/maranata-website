import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import Hero from "./Hero";
import ImageComponent from "./ImageComponent";

import bgImage from "../assets/images/leaders.jpg";
import "../styles/leaders.scss";

import leaders from "../utils/leaders";

const Leaders = () => {
  return (
    <div className="leaders">
      <Hero bgImage={bgImage} text="Lideri" />
      <div>
        <h1 className="title">Liderii nostri</h1>
        <div className="leaders-container">
          {leaders.map((leader) => (
            <LeaderCard
              imgID={leader.imgID}
              name={leader.name}
              role={leader.role}
              hash={leader.hash}
            />
          ))}
        </div>
        <img
          src="https://drive.google.com/uc?export=view&id=1L0kPmKO_zAEEaRoDxrjjACmXnforKXhU"
          alt=""
        />
      </div>
    </div>
  );
};

const LeaderCard = (props) => (
  <div className="leader-card">
    <LeaderImageComponent
      src={props.imgID}
      className="img"
      hash={props.hash}
      width={175}
    />
    <span className="name">{props.name}</span>
    <span className="role">{props.role}</span>
  </div>
);

const LeaderImageComponent = (props) => {
  const { src, hash, width } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };

    img.src = src;
  }, [src]);

  return (
    <>
      {!imgLoaded ? (
        <Blurhash
          hash={hash}
          style={{ borderRadius: "10" }}
          width={detectMobile() ? window.innerWidth * 0.7 : width}
          height={detectMobile() ? window.innerWidth * 0.7 : width}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ) : (
        <img src={src} onClick={props?.onClick} className={props?.className} />
      )}
    </>
  );
};

const detectMobile = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return (
    toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    }) || window.innerWidth <= 500
  );
};

export default Leaders;
