const usefetch = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        authorization: `Nazaara@Token ${process.env.API_SECURE_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await res.json();

    return jsonData;
  } catch (error) {
    return error;
  }
};

export default usefetch;
