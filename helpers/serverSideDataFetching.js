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

export async function postData(url, payload) {
  try {
    const response = await fetch(
      { url },
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error from action:", error);
  }
}

export async function patchData(url, payload) {
  try {
    const response = await fetch(
      { url },
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error from action:", error);
  }
}
