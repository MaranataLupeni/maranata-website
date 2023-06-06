import Hero from "./Hero";

import bgImage from "../assets/images/leaders.jpg";
import "../styles/leaders.scss";

const Leaders = () => {
  return (
    <div className="leaders">
      <Hero bgImage={bgImage} text="Lideri" />
      <div>
        <h1 className="title">Liderii nostri</h1>
        <div className="leaders-container">
          <div className="leader-card">
            <span className="img"></span>
            <span className="name">Nemes Daniel</span>
            <span className="function">Pastor</span>
          </div>
          <div className="leader-card">
            <span className="img"></span>
            <span className="name">Liviu Corseanschi</span>
            <span className="function">Prezbiter</span>
          </div>
          <div className="leader-card">
            <span className="img"></span>
            <span className="name">Lorem Ipsum</span>
            <span className="function">dominus dolore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
