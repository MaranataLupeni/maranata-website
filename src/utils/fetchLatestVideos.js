import axios from "axios";

const KEY = "AIzaSyD0IRxm5j2bglvrBFs19i9kPZbtO_dCC2c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    channelId: "UCM8Qbj3xTpQNDT0YLnaQgAg",
    order: "date",
    key: KEY,
  },
});
