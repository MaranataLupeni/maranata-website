import "../styles/hero.scss";

import hasDST from "../utils/hasDST";

const Hero = (props) => {
  const { bgImage, home, text } = props;
  const dst = hasDST();

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {text && <h1 className={home && "home-hero-text"}>{text}</h1>}

{/*       {home && (
        <iframe src="https://www.youtube.com/embed/g1bDotfajFI?autohide=1&autoplay=1&controls=0&enablejsapi=1&iv_load_policy=3&loop=1&modestbranding=0&playsinline=1&rel=0&showinfo=0&wmode=opaque&mute=1&origin=https%3A%2F%2Fauthenticchurch.com&widgetid=1" />
      )} */}

      {home && (
        <div className="home-info">
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
    </div>
  );
};

export default Hero;
