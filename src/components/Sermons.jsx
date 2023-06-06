import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Hero from "./Hero";

import api from "../utils/fetchLatestVideos";
import bgImage from "../assets/images/sermons.jpg";
import "../styles/sermons.scss";

const Sermons = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [selectedDate, setSelectedDate] = useState("");

  const getDateFromVideo = (video) => video?.snippet?.publishTime.split("T")[0];

  const fetchVideos = async () => {
    const res = await api.get("/search").then((res) => {
      const latestVideos = res?.data?.items;
      setVideos(latestVideos);
      setCurrentVideo(videos[0]);
      setSelectedDate(getDateFromVideo(videos[0]));
    });
  };

  useEffect(() => {
    fetchVideos();
  }, [videos]);

  const handleSelectionChange = (e) => {
    let selectedVideo = videos.find(
      (video) => getDateFromVideo(video) === e.target.value
    );
    setCurrentVideo(selectedVideo);
    setSelectedDate(getDateFromVideo(currentVideo));
  };

  return (
    <div>
      <Hero bgImage={bgImage} text="Slujbe" />
      <div className="sermons">
        <div className="selection-container">
          <div>
            <label htmlFor="selection">Data</label>
            <select
              name="selection"
              onChange={handleSelectionChange}
              value={selectedDate}
            >
              {videos.map((video, i) => (
                <option
                  value={getDateFromVideo(video)}
                  key={video?.id?.videoId}
                >
                  {getDateFromVideo(video)}
                </option>
              ))}
            </select>
            <span className="select-arrow"></span>
          </div>
          <button>
            <a
              href="https://www.youtube.com/@bisericamaranatalupeni9430"
              target={"_blank"}
            >
              ABONEAZA-TE
            </a>
            <i className="fa-regular fa-circle-right" />
          </button>
        </div>

        <div className="video-container">
          <span>
            {selectedDate}
            <b style={{ fontSize: "1.25rem" }}>*</b>
          </span>
          <YouTube videoId={currentVideo?.id?.videoId} />
        </div>
        <p
          style={{
            paddingInline: "20%",
            color: "#878787",
            paddingBottom: "1rem",
          }}
        >
          *Datele afișate de YouToube și cele înregistrate de echipa noastră pot
          diferenția datorită diferenței de fus orar și/ sau ora la care
          serviciul a fost înregistrat de către YouTube.
        </p>
      </div>
    </div>
  );
};

export default Sermons;
