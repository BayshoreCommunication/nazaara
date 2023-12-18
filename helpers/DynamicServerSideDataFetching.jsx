export const fetchDynamicServerSideData = async (url) => {
  const res = await fetch(url, {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
