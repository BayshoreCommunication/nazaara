"use server";

export const fetchServerSideData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
      next: { revalidate: 360 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("data fetching error", error.message);
  }
};
