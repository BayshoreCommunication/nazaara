import { unstable_noStore } from "next/cache";

export const fetchServerSideData = async (url) => {
  unstable_noStore();
  const res = await fetch(url, {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
