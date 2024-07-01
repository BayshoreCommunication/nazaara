export const fetchServerSideData = async (url) => {
  const res = await fetch(url, {
    headers: {
      authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
    },
    next: { revalidate: 360 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
