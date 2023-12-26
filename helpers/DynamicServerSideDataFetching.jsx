export const fetchDynamicServerSideData = async (url) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
};
