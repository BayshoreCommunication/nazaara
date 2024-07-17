"use server";

export const fetchServerSideData = async (url) => {
  // const res = await fetch(url, {
  //   headers: {
  //     authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
  //   },
  //   next: { revalidate: 360 },
  // });

  // return res.json();

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
    },
  });

  const data = await response.json();
  return data;
};
