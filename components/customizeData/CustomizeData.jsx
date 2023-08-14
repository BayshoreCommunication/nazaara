const CustomizeData = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

export default CustomizeData;
