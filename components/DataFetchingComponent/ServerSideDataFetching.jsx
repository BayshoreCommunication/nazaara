//server side data fetching
// const FetchServerSideData = async (url) => {
//   const res = await fetch(url)
//   return await res.json()
// }

// export default FetchServerSideData

async function fetchServerSideData(url) {
  const res = await fetch(url, {
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
