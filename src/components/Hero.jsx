import { useEffect } from "react";

import hasDST from "../utils/hasDST";
import announcements from "../utils/announcements";
import "../styles/hero.scss";

const Hero = (props) => {
  const { bgImage, home, text } = props;
  const dst = hasDST();

  const changeTab = () => {
    const buttonsContainer = document.querySelector(".buttons-container")
    const programContainer = document.querySelector(".program-container")
    if (!buttonsContainer.classList.contains("announcements-tab")) {
      buttonsContainer.classList.add("announcements-tab")
      programContainer.classList.add("not-display")
      programContainer.style.pointerEvents = "none"
    } else {
      buttonsContainer.classList.remove("announcements-tab")
      programContainer.classList.remove("not-display")
      programContainer.style.pointerEvents = "unset"
    }
  }

  useEffect(() => {
    const hero = document.querySelector(".hero")
    console.log(window.location.pathname)
    if (window.location.pathname !== "/evenimente")
      hero.style.backgroundColor = "#303030"
  }, [])

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {text && <h1 className={home && "home-hero-text"}>{text}</h1>}

      {home && (
          <div className="program-container">
            <h2>MARANATA DOMNUL NOSTRU VINE</h2>
            <table cellSpacing={0}>
              <tbody>
                <tr>
                  <td>Duminică 9:00 | {!dst ? "17:00" : "18:00"}</td>
                  <td>Joi {!dst ? "17:00" : "18:00"}</td>
                </tr>
                <tr>
                  <td>Marți 18:00</td>
                  <td>Vineri 18:00</td>
                </tr>
              </tbody>
            </table>
          </div>
      )}
      {(home && announcements[0].text.length) && (
        <div className="announcements">
          <div className="buttons-container">
            <button onClick={() => changeTab()}>Program</button>
            <button onClick={() => changeTab()}>Anunțuri</button>
          </div>
          <div className="txt-container">
            <h1>{announcements[0].title}</h1>
            <p>{announcements[0].description}</p>

            <span>
              <i className="fa-solid fa-location-dot"></i>
              <a href="https://www.google.com/maps/place/Biserica+Maranata/@45.3500689,23.1999991,15z/data=!4m6!3m5!1s0x474de7f5aa3fb301:0x3282b13d09e46019!8m2!3d45.3500689!4d23.1999991!16s%2Fg%2F1vg6sj6j?entry=ttu">
                {announcements[0].location}
              </a>
            </span>
            <br />
            <span>
              <i className="fa-regular fa-clock"></i>
              {announcements[0].dateTime}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;  
