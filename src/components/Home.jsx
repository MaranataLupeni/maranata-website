import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import Hero from "./Hero";

import "react-multi-carousel/lib/styles.css";
import cards from "../utils/cards";
import bgImage from "../assets/images/home-bg.png";
import "../styles/cards.scss";

const Home = (props) => {
  const { handleFormPurpose, handleFormOpen, showDots } = props;
  const [isMobile, setIsMobile] = useState(false);

  const responsive = {
    mobile: {
      breakpoint: {
        max: 450,
        min: 0,
      },
      items: 1,
    },
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 500);
    });

    return () => {
      window.removeEventListener("resize", () => 3);
    };
  });

  return (
    <div>
      <Hero bgImage={bgImage} home text={"MARANATA DOMNUL NOSTRU VINE"} />

      <div className="card-container">
        {isMobile ? (
          <div className="mobile-cards">
            <Carousel
              responsive={responsive}
              infinite={true}
              showDots={showDots ? true : false}
              dir="utd"
              className="cards-carousel"
            >
              {cards.map((card) => (
                <Card
                  key={card.id}
                  img={card.img}
                  link={card.link}
                  topText={card.topText}
                  bottomText={card.bottomText}
                  handleFormOpen={handleFormOpen}
                  handleFormPurpose={handleFormPurpose}
                />
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="desktop-cards">
            {cards.map((card) => (
              <Card
                key={card.id}
                img={card.img}
                link={card.link}
                topText={card.topText}
                bottomText={card.bottomText}
                handleFormOpen={handleFormOpen}
                handleFormPurpose={handleFormPurpose}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Card = (props) => {
  const {
    img,
    link,
    bottomText,
    topText,
    purpose,
    handleFormPurpose,
    handleFormOpen,
  } = props;
  const navigate = useNavigate();

  const handleClick = (link) => {
    window.scrollTo(0, 0);
    if (link !== "/") navigate(link);
    else {
      handleFormPurpose(purpose);
      handleFormOpen(true);
    }
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      onClick={() => handleClick(link)}
    >
      <h2 style={{ textAlign: "center" }}>{topText}</h2>
      <h1 style={{ fontSize: "1rem" }}>{bottomText}</h1>
    </div>
  );
};

export default Home;
