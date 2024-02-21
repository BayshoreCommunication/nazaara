import axios from "axios";

export const fetchClientSideData = async (url) => {
  const res = await axios.get(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
