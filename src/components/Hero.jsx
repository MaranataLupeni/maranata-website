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
      <h1 className={home && "home-hero-text"}>{text}</h1>

      {home && (
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
      )}
    </div>
  );
};

export default Hero;
