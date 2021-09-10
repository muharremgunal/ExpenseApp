import axios from "axios";
// Your API Key: d6a92b1b316df70c80b1bf5d

export const exchangeApi = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/d6a92b1b316df70c80b1bf5d/pair",
});
