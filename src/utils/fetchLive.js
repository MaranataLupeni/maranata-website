import axios from "axios";

const KEY = "AIzaSyD0IRxm5j2bglvrBFs19i9kPZbtO_dCC2c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    channelId: "UCM8Qbj3xTpQNDT0YLnaQgAg",
    type: "video",
    eventType: "live",
    key: KEY,
  },
});
