import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = (props) => {
  const { src, hash } = props;
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
          width={
            detectMobile() ? window.innerWidth * 0.9 : window.innerWidth * 0.6
          }
          height={detectMobile() ? 200 : 400}
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

export default ImageComponent;
