import axios from "axios";

const KEY = "AIzaSyBipureYtTyVcL2NruE7aMfJXw3izW1Qgk";

// Creating a preconfigured instance of axios with some default parameters
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
