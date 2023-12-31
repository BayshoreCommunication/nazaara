async function fetchServerSideData(url) {
  const res = await fetch(url, {
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
