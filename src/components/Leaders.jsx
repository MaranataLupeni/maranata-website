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
    <ImageComponent src={props.imgID} className="img" hash={props.hash} />
    <span className="name">{props.name}</span>
    <span className="role">{props.role}</span>
  </div>
);

export default Leaders;
