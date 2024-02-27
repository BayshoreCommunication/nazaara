export const fetchDynamicServerSideData = async (url) => {
  const res = await fetch(url, {
    headers: {
      authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
};
