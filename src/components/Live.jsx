import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Hero from "./Hero";

import bgImage from "../assets/images/live.jpg";
import api from "../utils/fetchLive";
import hasDST from "../utils/hasDST";
import "../styles/live.scss";

const Live = () => {
  const [liveId, setLiveId] = useState("");
  const [isLive, setIsLive] = useState(false);
  const dst = hasDST();

  const fetchLive = async () => {
    const res = await api.get("/search").then((res) => {
      if (!res?.data?.items?.length) return;
      setIsLive(true);
      const live = res?.data?.items[0];
      setLiveId(live?.id?.videoId);
    });
  };

  useEffect(() => {
    fetchLive().then(() => console.log(liveId));
  }, []);

  return (
    <div className="live">
      <Hero bgImage={bgImage} />
      <div className="live-container">
        <button>
          <a
            href="https://www.youtube.com/@bisericamaranatalupeni9430"
            target={"_blank"}
          >
            ABONEAZA-TE
          </a>
          <i className="fa-regular fa-circle-right" />
        </button>

        {isLive ? (
          <YouTube videoId={liveId} />
        ) : (
          <div className="not-live">
            <h1>Nu suntem live</h1>
            <h2>
              Vom fi live în fiecare Duminică la orele 10:00 și{" "}
              {!dst ? "17:00" : "18:00"}, și de asemenea vom fi live cu orice
              ocazie specială, anunțată și în cadrul bisericii.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Live;
