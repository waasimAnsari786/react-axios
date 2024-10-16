import axios from "axios";

const API_URL = axios.create({
  baseURL: "https://potterapi-fedeperin.vercel.app/",
});

export const getData = () => {
  return API_URL.get("en/books");
};
