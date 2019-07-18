import axios from "axios";

const KEY = "AIzaSyCJPGzcG8Jf-Nsfz5dwMXW4zyqjNh0Zjko";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
