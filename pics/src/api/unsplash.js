import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID OK6T_AiD7SvzHTt9m24a8ruTrff3tz0sAzyxVeeWyaQ",
  },
});
