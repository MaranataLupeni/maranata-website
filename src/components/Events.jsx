import { useState, useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import Carousel from "react-multi-carousel";
import ImageComponent from "./ImageComponent";
import Hero from "./Hero";

import "react-awesome-lightbox/build/style.css";
import "react-multi-carousel/lib/styles.css";
import bgImage from "../assets/images/events.png";
import events from "../utils/events.js";

import "../styles/events.scss";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [isOpened, setIsOpened] = useState(false);
  const baseURL = "https://drive.google.com/uc?export=view&id=";

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 450,
        min: 0,
      },
      items: 1,
    },
  };

  useEffect(() => {}, [selectedEvent]);

  return (
    <div className="events-container">
      <Hero bgImage={bgImage} text={"Evenimente"} />
      <div className="events">
        <Carousel
          responsive={responsive}
          dir="utd"
          containerClass="carousel-container event-images"
        >
          {selectedEvent.pictures.map((image, i) => {
            console.log(baseURL + image);
            return <img src={baseURL + image} key={i} />;
          })}
        </Carousel>
        <div className="events-cards">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="event"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEvent(event);
                const prevEvent = document.querySelector(".selected-event");
                if (prevEvent) prevEvent.classList.remove("selected-event");
                const date = e.target.querySelector(".date");
                date.classList.add("selected-event");
              }}
            >
              <p className={"date " + (!i && "selected-event")}>{event.date}</p>
              <h1 className="name">{event.name}</h1>
              <p className="description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
